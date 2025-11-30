import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  health(): string {
    return 'Health check is ok. StatusCode: 200';
  }
}
