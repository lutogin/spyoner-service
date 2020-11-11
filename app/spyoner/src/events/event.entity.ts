import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'events' })
export class EventEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({
    type: 'varchar',
    length: 64,
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 64,
    name: 'event_topic',
  })
  eventTopic: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 256,
    name: 'event_id',
  })
  eventId: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 256,
    name: 'process_id',
  })
  processId: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 256,
    name: 'process_name',
  })
  processName: string;
}
