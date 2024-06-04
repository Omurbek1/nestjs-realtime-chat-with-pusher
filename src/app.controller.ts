import { Body, Controller, Get, Post } from '@nestjs/common';
import { PusherService } from './pusher.service';

@Controller()
export class AppController {
  constructor(private pusherService: PusherService) {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }
  @Post('messages')
  async messages(
    @Body('username') username: string,
    @Body('message') message: string,
  ) {
    await this.pusherService.trigger('chat', 'message', {
      username,
      message,
    });

    return [];
  }
}
