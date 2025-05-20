import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.path === '/todos' && req.method === 'POST') {
      console.log(
        `Time: ${new Date().toISOString()} - Body: ${JSON.stringify(req.body)}`,
      );
    }
    next();
  }
}
