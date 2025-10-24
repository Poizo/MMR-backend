import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogbookModule } from './logbook/logbook.module';
import { Boat } from './models/boat.entity';
import { Rower } from './models/rower.entity';
import { Journey } from './models/journey.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'mmr_admin',
      password: 'mmr_pwd',
      database: 'MMR_DB',
      entities: [Boat, Rower, Journey],
      synchronize: true,
    }),
    LogbookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
