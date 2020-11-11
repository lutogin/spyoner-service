import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { PasswordService } from '../../auth/utils/password.service';
import {
  DEFAULT_USER_EMAIL,
  DEFAULT_USER_PASSWORD,
} from '../../../../config/app.config';

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection) {
    await connection
      .createQueryBuilder()
      .insert()
      .into('users')
      .values([{
        email: DEFAULT_USER_EMAIL,
        password: await PasswordService.hash(DEFAULT_USER_PASSWORD),
      }])
      .execute();
  }
}
