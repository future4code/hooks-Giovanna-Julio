import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { AuthType, UserDTO } from '../models/DTOs';

export class UserController {
	public async signUp(req: Request, res: Response) {
		try {
			const { email, password } = req.body;

			const input: UserDTO = {
				email,
				password,
			};

			const token = await new UserBusiness().signUp(input);

			res.status(201).send({ token });
		} catch (error) {
			res.status(error.status).send(error.message || error.sqlMessage);
		}
	}

	public async login(req: Request, res: Response) {
		try {
			const { email, password } = req.body;

			const input: UserDTO = {
				email,
				password,
			};

			const token = await new UserBusiness().login(input);

			res.status(201).send({ token });
		} catch (error) {
			res.status(error.status).send(error.message || error.sqlMessage);
		}
	}

	public async getActiveUser(req: Request, res: Response) {
		try {
			const token = req.headers.authorization as AuthType;

			const user = await new UserBusiness().getActiveUser(token);

			res.status(200).send(user);
		} catch (error) {
			res.status(error.status).send(error.message || error.sqlMessage);
		}
	}
}
