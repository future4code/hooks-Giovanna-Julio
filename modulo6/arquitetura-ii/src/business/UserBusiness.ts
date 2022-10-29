import { UserDatabase } from '../data/UserDatabase';
import { v4 as generateId } from 'uuid';

export class UserBusiness {
	private userDatabase = new UserDatabase();

	public async create({ email, name, password }: any): Promise<void> {
		try {
			if (!email || !name || !password) {
				throw new Error('Dados inválidos (email, name, password)');
			}

			const id = generateId();

			await this.userDatabase.create({
				id,
				name,
				email,
				password,
			});
		} catch (error: any) {
			throw new Error(error.message);
		}
	}

	public async getAll() {
		try {
			const result = await this.userDatabase.getAll();

			if (!result.length) {
				throw new Error('No users found.');
			}

			return result;
		} catch (error: any) {
			throw new Error(error.message);
		}
	}
}
