import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Boat } from '../models/boat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoatsService {
  constructor(
    @InjectRepository(Boat)
    private readonly boatRepository: Repository<Boat>,
  ) {}

  async getAllBoats(): Promise<Boat[]> {
    return this.boatRepository.find();
  }
}
