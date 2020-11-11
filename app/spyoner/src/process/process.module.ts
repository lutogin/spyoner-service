import { Module } from '@nestjs/common';
import { ProcessPresenter } from './process.presenter';
import { ProcessController } from './process.controller';
import { ProcessService } from './process.service';

@Module({
  controllers: [
    ProcessController,
  ],
  providers: [
    ProcessService,
    ProcessPresenter,
  ],
  exports: [
    ProcessService,
    ProcessPresenter,
  ],
})
export class ProcessModule {}
