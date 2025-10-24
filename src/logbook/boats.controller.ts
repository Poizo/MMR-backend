import { Controller, Get } from '@nestjs/common';
import { BoatsService } from './boats.service';

@Controller('boats')
export class BoatsController {
  constructor(private readonly boatsService: BoatsService) {}

  @Get()
  getAllBoats() {
    return this.boatsService.getAllBoats();
  }
}
