import { CustomError } from '../error/CustomError';
import { NewUser } from '../models/Types';
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase {
	TABLE_NAME = 'Users';

	public async getByEmail(email: string) {
		try {
			const result = await UserDatabase.connection(this.TABLE_NAME)
				.select()
				.where({ email });

			return result;
		} catch (error) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	}

	public async createUser(input: NewUser) {
		try {
			await UserDatabase.connection(this.TABLE_NAME).insert(input);
		} catch (error) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	}

	public async getById(id: string) {
		try {
			const result = await UserDatabase.connection(this.TABLE_NAME)
				.select()
				.where({ id });

			return result;
		} catch (error) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	}
}
