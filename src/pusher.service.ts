import { Injectable } from '@nestjs/common';
import Pusher from 'pusher';

@Injectable()
export class PusherService {
  pusher: Pusher;
  constructor() {
    this.pusher = new Pusher({
      appId: '1814031',
      key: 'fec5fc6cce30cd447fbb',
      secret: '3e83396ce9c8dcafa523',
      cluster: 'ap2',
      useTLS: true,
    });
  }

  async trigger(channel: string, event: string, data: any) {
    await this.pusher.trigger(channel, event, data);
  }
}
