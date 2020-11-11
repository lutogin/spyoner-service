import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntityRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntityRepository,
    ]),
  ],
  providers: [
    UserService,
    UserEntityRepository,
  ],
})

export class UserModule {}
