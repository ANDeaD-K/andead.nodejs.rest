import { Express, Response } from 'express';
import { NextFunction } from 'connect';
import joi from 'joi';

import { userSchema } from './schemas/user';
import UsersController from './controllers/user-controller';

export default class Routes {
    constructor(server: Express) {
        const usersController = new UsersController();

        server
            .route('/users')
            .get(usersController.getUsers);

        server
            .route('/user')
            .post(this.validate(userSchema), usersController.createUser);
    }

    private validate(schema: any): any {
        return function validateRequest(req: any, res: Response, next: NextFunction) {
            if (!schema) {
                return next();
            }

            let toValidate: any = {};

            ['params', 'body', 'query'].forEach(key => {
                if (schema[key]) {
                    toValidate[key] = req[key];
                }
            });

            return joi.validate(toValidate, schema, (error: joi.ValidationError, value: any) => {
                if (error) {
                    return next(res.status(400).json({
                        status: 'error',
                        message: 'Bad Request'
                    }));
                }

                return next();
            });
        };
    }
}
