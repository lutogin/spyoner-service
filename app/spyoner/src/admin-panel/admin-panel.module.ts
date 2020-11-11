import { AdminModule } from '@admin-bro/nestjs';
import { Module } from '@nestjs/common';
import { Database, Resource } from '@admin-bro/typeorm';
import AdminBro from 'admin-bro';
import { adminBroConfig } from '../../config/admin-bro-config';
import { EventModule } from '../events/event.module';
import { EventService } from '../events/event.service';
import { ProcessModule } from '../process/process.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { UserService } from './users/user.service';

AdminBro.registerAdapter({ Database, Resource });

@Module({
  imports: [
    AdminModule.createAdmin(adminBroConfig),
    UserModule,
    AuthModule,
    EventModule,
    ProcessModule,
  ],
  providers: [
    UserService,
    EventService,
  ],
})
export class AdminPanelModule {}
