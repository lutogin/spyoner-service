import { Injectable } from '@nestjs/common';
import { UserPresenter } from '../users/user.presenter';
import { UserService } from '../users/user.service';
import { AuthDto } from './dto/auth.dto';
import { PasswordService } from './utils/password.service';

@Injectable()
export class AuthService {
  private readonly userPresenter: UserPresenter;
  private readonly userService: UserService;

  constructor() {
    this.userPresenter = new UserPresenter();
    this.userService = new UserService();
  }

  /**
   * Method for admin-bro, if wrong credentials need return empty string, if ok - return object with email.
   */
  async auth(auth: AuthDto): Promise<any> {
    const user = await this.userService.getUserByEmail(auth.email);
    if (!user) {
      return '';
    }

    if (!await this.checkPassword(auth.password, user.password)) {
      return '';
    }

    return this.userPresenter.emailPresenter(user);
  }

  async checkPassword(rawPassword, hash): Promise<boolean> {
    return PasswordService.compare(rawPassword, hash);
  }
}
