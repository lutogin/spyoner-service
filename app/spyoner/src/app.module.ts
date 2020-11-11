import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { typeOrmConfig } from '../config/typeorm.config';
import { winstonConfig } from '../config/winston.config';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { ConsumerModule } from './consumer/consumer.module';
import { EventModule } from './events/event.module';
import { ProcessModule } from './process/process.module';

@Module({
  imports: [
    WinstonModule.forRoot(winstonConfig),
    TypeOrmModule.forRoot(typeOrmConfig),
    ConsumerModule,
    EventModule,
    ProcessModule,
    AdminPanelModule,
  ],
  providers: [],
})
export class AppModule {}
