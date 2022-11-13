import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { FriendshipDTO } from '../models/FriendshipDTO';
import { UserDTO } from '../models/UserDTO';

export class UserController {
    public async insertUser(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;

            const input: UserDTO = {
                name,
                email,
                password,
            };

            await new UserBusiness().insertUser(input);

            res.status(201).send({ message: 'User created!' });
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage);
        }
    }
}
