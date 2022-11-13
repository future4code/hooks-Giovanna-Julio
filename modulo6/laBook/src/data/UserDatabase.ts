import { CustomError } from '../error/CustomError';
import { Friendship } from '../models/Friendship';
import { User } from '../models/User';
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase {
	TABLE_NAME = 'labook_users';

	public async insertUser(newUser: User) {
		try {
			await UserDatabase.connection(this.TABLE_NAME).insert(newUser);
		} catch (error: any) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	}

	public async getByEmail(email: string) {
		try {
			const result = await UserDatabase.connection(this.TABLE_NAME)
				.select()
				.where({ email });

			return result;
		} catch (error: any) {
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
		} catch (error: any) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	}
}
