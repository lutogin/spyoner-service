import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntityRepository } from './event.repository';
import { EventService } from './event.service';
import { EventController } from './event.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EventEntityRepository,
    ]),
  ],
  providers: [
    EventService,
    EventEntityRepository,
  ],
  controllers: [
    EventController,
  ],
  exports: [
    EventEntityRepository,
    EventService,
  ],
})
export class EventModule {}
