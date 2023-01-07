import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { IUser } from '../models/Types';

export class UserController {

	public async getUserById(req: Request, res: Response) {
		try {
			const {id} = req.params

			const user: IUser = await new UserBusiness().getUserById(id)

			res.status(200).send({user});
		} catch (error) {
			res.status(error.status).send(error.message || error.sqlMessage);
		}
	}

}
