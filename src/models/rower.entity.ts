import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Journey } from './journey.entity';

@Entity({ name: 'rower' })
export class Rower extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  firstname: string;

  @Column({ type: 'varchar', length: 300 })
  lastname: string;

  @Column({ type: 'varchar', length: 300, unique: true, nullable: true })
  alias: string;

  @Column({ type: 'timestamptz' })
  birthday: Date;

  @Column({ type: 'varchar', length: 10 })
  license: string;

  @Column({ type: 'decimal' })
  // In Kilograms
  weight: number;

  @Column({ type: 'decimal' })
  // In metters
  size: number;

  @Column({ type: 'varchar', length: 300, nullable: true })
  description: string;

  @ManyToMany(() => Journey, (journey) => journey.id)
  journeys: string[];
}
