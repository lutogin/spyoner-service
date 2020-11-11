import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  async getUserByEmail(email: string): Promise<UserEntity|undefined> {
    return UserEntity.findOne({ email });
  }
}
