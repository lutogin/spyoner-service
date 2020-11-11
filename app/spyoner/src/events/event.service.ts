import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from 'winston';
import { CreateEventDto } from './dto/create-event.dto';
import { EventEntity } from './event.entity';
import { IEvent } from './event.interface';
import { EventEntityRepository } from './event.repository';

@Injectable()
export class EventService {
  private logger: Logger;

  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: EventEntityRepository,
    @Inject('winston')
    private readonly winston: Logger,
  ) {
    this.logger = this.winston.child({ context: 'event.service' });
  }

  async createEvent(event: CreateEventDto): Promise<EventEntity> {
    try {
      return await this.eventRepository.create(event);
    } catch (err) {
      this.logger.error('Error on create new event.', {
        originalMessage: err.message,
        err,
      });
      throw new Error(err);
    }
  }

  async getEvent(id: string): Promise<IEvent> {
    return this.eventRepository.findOne({ id });
  }

  async getAllEvents(): Promise<IEvent[]> {
    return this.eventRepository.find();
  }

  async updateEvent(id: string, event: Partial<CreateEventDto>): Promise<any> {
    try {
      return await this.eventRepository.update({ id }, event);
    } catch (err) {
      this.logger.error('Error on update event.', {
        originalMessage: err.message,
        err,
      });
      throw new Error(err);
    }
  }

  async deleteEvent(id): Promise<any> {
    try {
      return await this.eventRepository.delete({ id });
    } catch (err) {
      this.logger.error('Error on delete event.', {
        originalMessage: err.message,
        err,
      });
      throw new Error(err);
    }

  }
}
