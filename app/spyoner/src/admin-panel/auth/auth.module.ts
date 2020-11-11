import { Module } from '@nestjs/common';
import { UserModule } from '../users/user.module';
import { UserService } from '../users/user.service';
import { AuthService } from './auth.service';
import { PasswordService } from './utils/password.service';

@Module({
  imports: [
    UserModule,
  ],
  providers: [
    AuthService,
    UserService,
    PasswordService,
  ],
})
export class AuthModule {}
