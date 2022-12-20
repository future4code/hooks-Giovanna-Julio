import { CustomError } from '../error/CustomError';
import { NewUserDTO, UserDTO } from '../models/DTOs';
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase {
	TABLE_NAME = 'users';

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

	public async createUser(input: NewUserDTO) {
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
