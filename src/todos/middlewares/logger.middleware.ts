import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'POST' && req.path === '/todos') {
      res.on('finish', () => {
        console.log(`[${new Date().toISOString()}] POST /todos`);

        console.log(`Body: ${JSON.stringify(req.body)}`);

        console.log('-----------------------------');
      });
    }

    next();
  }
}
