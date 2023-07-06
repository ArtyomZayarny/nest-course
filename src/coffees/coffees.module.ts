import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffe } from './entities/coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffe])],
  providers: [CoffeesService],
  controllers: [CoffeesController],
})
export class CoffeesModule {}
