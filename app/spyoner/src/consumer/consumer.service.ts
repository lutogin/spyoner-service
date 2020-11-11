import { Inject, Injectable } from '@nestjs/common';
import { Consumer, Kafka } from 'kafkajs';
import { Logger } from 'winston';
import { get } from 'lodash';
import { CLIENT_ID } from '../../config/app.config';
import { IEvent } from '../events/event.interface';
import { EventService } from '../events/event.service';
import { ProcessService } from '../process/process.service';
import { IKafkaValue } from './interfaces/kafka-value.interface';

@Injectable()
export class ConsumerService {
  private client: Consumer;
  private logger: Logger;

  constructor(
    @Inject('winston')
    private readonly winston: Logger,
    private readonly kafka: Kafka,
    private readonly eventsService: EventService,
    private readonly processService: ProcessService,
  ) {
    this.client = kafka.consumer({ groupId: CLIENT_ID });
    this.logger = this.winston.child({ context: 'consumer.service' });
  }

  async onModuleInit() {
    await this.client.connect();
    const availableEvents = await this.eventsService.getAllEvents();
    availableEvents.forEach((event) => {
      this.client.subscribe({ topic: event.eventTopic, fromBeginning: true });
    });

    await this.client.run({
      eachMessage: async ({ topic, partition, message }) => {
        try {
          const valueFromKafka: IKafkaValue = JSON.parse(message.value.toString());
          this.logger.info('---> catch event', {
            topic,
            partition,
            offset: message.offset,
            value: valueFromKafka,
          });
          const handledEvent: IEvent = availableEvents
            .find((event) => event.eventId === valueFromKafka.event_id);
          if (!handledEvent) {
            return;
          }
          await this.processService.runProcessById(handledEvent.processId);
        } catch (err) {
          this.logger.error('Error on eachMessage', {
            message: err.message,
            response: get(err, 'response.data'),
            err,
          });
          throw new Error('Error on eachMessage');
        }
      },
    });
  }
}
