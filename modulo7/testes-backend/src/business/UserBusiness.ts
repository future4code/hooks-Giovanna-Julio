import { UserDatabase } from '../data/UserDatabase';
import { CustomError } from '../error/CustomError';
import { InvalidInput } from '../error/InvalidInput';
import { AuthType } from '../models/DTOs';
import { IUser } from '../models/Types';

export class UserBusiness{

	public async getUserById(input: AuthType) {
		try {
			if (!input || typeof input !== "string" ) {
				throw new InvalidInput()
			}

			const user: IUser = await new UserDatabase().getUserById(input)

			return user
		} catch (error) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	}
}
