import {
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  RequestMethod,
} from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ApiKeyGuard } from './guards/api-key/api-key.guard';
import { ConfigModule } from '@nestjs/config';
import { LoggingMiddleware } from './middleware/logging/logging.middleware';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    },
  ],
})
export class CommonModule implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    throw new Error('Method not implemented!!');
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes({
      path: 'coffees',
      method: RequestMethod.GET,
    });
  }
}
