import { NextFunction, Request, Response } from 'express';

class PingController {
  public static index(req: Request, res: Response, next: NextFunction) {
    try {
      res.json({
        message: 'Hello world from ping controller',
      });
    } catch (error) {
      next(error);
    }
  }

  public static postMethod(req: Request, res: Response, next: NextFunction) {
    try {
      res.json({
        message: 'Hello world from ping controller with POST',
      });
    } catch (error) {
      next(error);
    }
  }
}

export default PingController;
