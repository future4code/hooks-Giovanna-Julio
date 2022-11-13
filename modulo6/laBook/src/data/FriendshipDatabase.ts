import { CustomError } from '../error/CustomError';
import { Friendship } from '../models/Friendship';
import { BaseDatabase } from './BaseDatabase';
import { UserDatabase } from './UserDatabase';

export class FriendshipDatabase extends BaseDatabase {
	private TABLE_NAME = 'labook_friendships';

	public async insertFriendship(newFriendship: Friendship) {
		try {
			await UserDatabase.connection(this.TABLE_NAME).insert(
				newFriendship
			);
		} catch (error: any) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	}

	public async getFriendshipById(id: string) {
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

	public async deleteFriendship(id: string) {
		try {
			await UserDatabase.connection(this.TABLE_NAME)
				.delete()
				.where({ id });
		} catch (error: any) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	}

	public async getAllFriendships(id: string) {
		try {
			const result = await UserDatabase.connection(this.TABLE_NAME)
				.select('user1_id')
				.where({ user1_id: id })
				.orWhere({ user2_id: id });

			return result;
		} catch (error: any) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	}
}
