import { Body, Controller, Post } from '@nestjs/common';
import { Kafka } from 'kafkajs';
import { CLIENT_ID, KAFKA_HOST } from '../config/app.config';

@Controller()
export class AppController {

  @Post()
  async sendTestAction(
    @Body() data,
  ) {
    const kafka = new Kafka({
      clientId: CLIENT_ID,
      brokers: [KAFKA_HOST],
    });

    const producer = kafka.producer();
    await producer.connect();

    await producer.send({
      topic: data.topic,
      messages: [
        { value: JSON.stringify(data) },
      ],
    });
  }
}
