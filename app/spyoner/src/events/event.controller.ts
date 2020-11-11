import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
  constructor(
    private readonly eventService: EventService,
  ) {}

  @Get('/:id')
  async getEvent(
    @Query('id') id: string
  ) {
    return this.eventService.getEvent(id);
  }

  @Get()
  async getAllEvents() {
    return this.eventService.getAllEvents();
  }

  @Post()
  async createEvent(
    @Body() event: CreateEventDto
  ) {
    return this.eventService.createEvent(event);
  }

  @Put('/:id')
  async updateEvent(
    @Query('id') id: string,
    @Body() event: Partial<CreateEventDto>
  ) {
    return this.eventService.updateEvent(id, event);
  }

  @Delete('/:id')
  async deleteEvent(
    @Query('id') id: string,
  ) {
    return this.eventService.deleteEvent(id);
  }
}
