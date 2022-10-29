import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';

export class UserController {
	private userBusiness = new UserBusiness();

	public async create(req: Request, res: Response): Promise<void> {
		try {
			const { email, name, password } = req.body;

			await this.userBusiness.create({ email, name, password });

			res.status(201).send({ message: 'Usuário cadastrado com sucesso' });
		} catch (error: any) {
			res.status(400).send(error.message);
		}
	}

	public async getAll(req: Request, res: Response): Promise<any> {
		try {
			const allUsers = await this.userBusiness.getAll();

			res.status(200).send({ users: allUsers });
		} catch (error: any) {
			res.status(400).send(error.message);
		}
	}
}
