import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';

class ProductionConfigService {}
class DevelopmentConfigAService {}
class ProductionConfigSerive {}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  providers: [
    CoffeesService,
    {
      provide: ProductionConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevelopmentConfigAService
          : ProductionConfigSerive,
    },
    {
      provide: COFFEE_BRANDS,
      useValue: ['boddy brew', 'nescafe'],
    },
  ],
  controllers: [CoffeesController],
  exports: [CoffeesService],
})
export class CoffeesModule {}
