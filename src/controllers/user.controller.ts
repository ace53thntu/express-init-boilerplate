import { USERS } from '@/data';
import { NextFunction, Request, Response } from 'express';
import { faker } from '@faker-js/faker';

class UserController {
  public static index(req: Request, res: Response, next: NextFunction) {
    try {
      res.json({
        data: USERS,
        message: 'Success',
      });
    } catch (error) {
      next(error);
    }
  }

  public static createUser(req: Request, res: Response, next: NextFunction) {
    const user = req.body;

    try {
      res.json({
        user: {
          ...user,
          _id: faker.datatype.uuid(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        message: 'Create user success',
      });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
