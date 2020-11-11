import { UserEntity } from './user.entity';

export class UserPresenter {
  emailPresenter(user: UserEntity) {
    return {
      email: user.email,
    };
  }
}
