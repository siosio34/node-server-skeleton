import { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";

// import { env } from '../../env';
// import { Logger } from '../../lib/logger';

@Middleware({ type: "before" })
export class LogMiddleware implements ExpressMiddlewareInterface {
  // private log = new Logger(__dirname);

  public use(req: Request, res: Response, next: NextFunction): any {
    return morgan("combined")(req, res, next);
  }
}
