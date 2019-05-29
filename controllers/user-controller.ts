import { Request, Response } from 'express';

export default class UsersController {
    public getUsers(request: Request, response: Response): void {
        console.log('Get users');

        response.status(200).json({
            status: 'success',
            message: 'Get users'
        });
    }

    public createUser(request: Request, response: Response): void {
        console.log('Create user');

        response.status(200).json({
            status: 'success',
            message: 'Ceate user'
        });
    }
}