import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProcessService } from './process.service';
import { ProcessId } from './process.types';

@Controller('process')
export class ProcessController {
  constructor(
    private readonly processService: ProcessService,
  ) {}

  @Get('/id')
  async getProcessIdByName(
    @Query('name') name: string,
  ): Promise<{ id: ProcessId }> {
    return this.processService.getProcessIdByName(name);
  }

  @Post('/:id')
  async startProcess(
    @Param('id') id: string,
  ) {
    return this.processService.runProcessById(id);
  }
}
