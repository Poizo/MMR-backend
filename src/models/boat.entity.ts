import { Column, Entity, OneToMany } from 'typeorm';
import { BoatTypeEnum } from '../enums/boat-type.enum';
import { BaseEntity } from './base.entity';
import { Journey } from './journey.entity';

@Entity({ name: 'boat' })
export class Boat extends BaseEntity {
  @Column({ type: 'varchar', length: 300, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 300, unique: true })
  alias: string;

  @Column({ type: 'enum', enum: BoatTypeEnum })
  type: BoatTypeEnum;

  @Column({ type: 'integer' })
  nbr_rowers: number;

  @Column({ type: 'decimal' })
  // In Kilograms
  weight: number;

  @Column({ type: 'decimal' })
  // In metters
  size: number;

  @Column({ type: 'varchar', length: 30, nullable: true })
  description: string;

  @OneToMany(() => Journey, (journey) => journey.id)
  journeys: string[];
}
