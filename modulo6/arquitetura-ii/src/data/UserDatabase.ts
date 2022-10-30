import { CustomError } from '../error/CustomError';
import { User } from '../models/User';
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase {
	TABLE_NAME = 'LABEFLIX_USER';

	public async create(newUser: User): Promise<void> {
		try {
			await UserDatabase.connection(this.TABLE_NAME)
				.insert(newUser)

		} catch (error: any) {
			throw new CustomError(error.statusCode, error.message || error.sqlMessage);
		}
	}

	public async getAll(): Promise<User[]> {
		try {
			const result = await UserDatabase.connection(this.TABLE_NAME)
				.select()

			return result;
		} catch (error: any) {
			throw new CustomError(error.statusCode, error.message || error.sqlMessage);
		}
	}

	public async getById(email: string): Promise<any> {
		try {
			const result = await UserDatabase.connection(this.TABLE_NAME)
				.select()
				.where({ email })

			return result
		} catch (error: any) {
			throw new CustomError(error.statusCode, error.message || error.sqlMessage);
		}
	}
}
