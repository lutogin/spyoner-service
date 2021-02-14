import { Controller, Post } from '@nestjs/common';
import { ConsumerService } from './consumer.service';

@Controller('consumer')
export class ConsumerController {
  constructor(
    private readonly consumerService: ConsumerService,
  ) {}
  @Post('reload')
  async reload() {
    await this.consumerService.reloadConsumer();
    return;
  }
}
