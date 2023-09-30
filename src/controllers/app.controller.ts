import { Body, Controller, Get, Post } from '@nestjs/common';
import { AerialEvent } from 'src/types/types';
import { AppService } from '../app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('')
  async createEvent(@Body() eventDTO: AerialEvent) {}
}
