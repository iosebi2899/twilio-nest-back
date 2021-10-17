import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('token/:id')
  getToken(@Param('id') userId: string) {
    return this.appService.getToken(userId);
  }
}
