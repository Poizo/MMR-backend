import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Boat } from './boat.entity';
import { Rower } from './rower.entity';

@Entity({ name: 'journey' })
export class Journey extends BaseEntity {
  @Column({ type: 'timestamptz' })
  date: Date;

  @Column({ type: 'decimal' })
  // In metters
  distance: number;

  @ManyToOne(() => Boat, (boat) => boat.id)
  @JoinColumn()
  boat: string;

  @ManyToMany(() => Rower)
  @JoinTable()
  rowers: Rower[];

  @Column({ type: 'varchar', length: 300 })
  remark: string;
}
