import { EntityRepository, Repository } from 'typeorm';
import { EventEntity } from './event.entity';

@EntityRepository(EventEntity)
export class EventEntityRepository extends Repository<EventEntity> {
}
