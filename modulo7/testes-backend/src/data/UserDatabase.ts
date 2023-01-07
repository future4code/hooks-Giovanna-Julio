import { UserRepository } from '../business/UserRepository';
import { CustomError } from '../error/CustomError';
import { AuthType } from '../models/DTOs';
import { IUser } from '../models/Types';
import { BaseDatabase } from './BaseDatabase';

export class 	UserDatabase extends BaseDatabase implements UserRepository{
	TABLE_NAME = 'Users';

	public async getUserById(input: AuthType) {
		try {
			const user: IUser[] = await UserDatabase.connection(this.TABLE_NAME)
				.select()
				.where({ id: input });

			return user[0];
		} catch (error) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	}
	
}
