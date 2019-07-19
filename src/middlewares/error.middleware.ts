import {
  ExpressErrorMiddlewareInterface,
  HttpError,
  Middleware
} from "routing-controllers";

import { NextFunction, Request, Response } from "express";

@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  public error(
    error: HttpError,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    res.status(error.httpCode || 500);
    res.json({
      name: error.name,
      message: error.message
    });
  }
}
