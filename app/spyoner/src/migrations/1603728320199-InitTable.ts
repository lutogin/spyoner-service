import { MigrationInterface, QueryRunner } from "typeorm";
import { UserRoleEnum } from '../admin-panel/users/user.role.enum';

export class InitTable1603728320199 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      create table if not exists users (
        id varchar(36) not null primary key,
        email varchar(256) not null unique,
        password text not null,
        role enum(${Object.entries(UserRoleEnum).map(([key, val]) => `'` + val + `'`).join(', ')}) default '${UserRoleEnum.admin}'
      )
    `);

    await queryRunner.query(`
      create table if not exists events (
        id varchar(36) not null primary key,
        description varchar(256),
        event_topic varchar(256) not null,
        event_id varchar(256) not null,
        process_id varchar(256) not null,
        process_name varchar(256) not null
      )
    `);

    await queryRunner.query(`
      create trigger before_insert_users
        before insert on users
        for each row
        begin
          if new.id is null then
            set new.id = uuid();
          end if;
        end;;
    `);

    await queryRunner.query(`
      create trigger before_insert_events
        before insert on events
        for each row
        begin
          if new.id is null then
            set new.id = uuid();
          end if;
        end;;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table "users"`);
    await queryRunner.query(`drop table "events"`);
    await queryRunner.query(`drop trigger "users"`);
    await queryRunner.query(`drop trigger "events"`);
  }

}
