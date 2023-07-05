import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This method return all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return id -${id} of the coffees`;
  }
}