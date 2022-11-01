import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { IUserInputDTO } from '../models/IUserInputDTO';
import { User } from '../models/User';

export class UserController {
	private userBusiness = new UserBusiness();

	public async create(req: Request, res: Response): Promise<void> {
		try {
			const { email, name, password } = req.body;

			const input: IUserInputDTO = {
				email,
				name,
				password,
			};

			await this.userBusiness.create(input);

			res.status(201).send({ message: 'Usuário cadastrado com sucesso' });
		} catch (error: any) {
			res.status(400).send(error.message || error.sqlMessage);
		}
	}

	public async getAll(req: Request, res: Response): Promise<any> {
		try {
			const users: User[] = await this.userBusiness.getAll();

			res.status(200).send({ users });
		} catch (error: any) {
			res.status(400).send(error.message || error.sqlMessage);
		}
	}
}
