import { Body, Controller, Post } from '@nestjs/common';
import { PusherService } from './pusher.service';

@Controller()
export class AppController {
  constructor(private pusherService: PusherService) {}

  @Post('path:message')
  async messages(
    @Body('username') username: string,
    @Body('message') message: string,
  ) {
    await this.pusherService.trigger('channel', message, {
      username,
      message,
    });
    return [];
  }
}
