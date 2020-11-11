import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kafka } from 'kafkajs';
import { EventEntity } from '../events/event.entity';
import { EventService } from '../events/event.service';
import { ProcessService } from '../process/process.service';
import { ConsumerService } from './consumer.service';
import { CLIENT_ID, KAFKA_URL } from '../../config/app.config';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      EventEntity,
    ]),
  ],
  providers: [
    EventService,
    ProcessService,
    ConsumerService,
    {
      provide: Kafka,
      useFactory: () => new Kafka({ clientId: CLIENT_ID, brokers: [KAFKA_URL] }),
    },
  ],
})
export class ConsumerModule {}
