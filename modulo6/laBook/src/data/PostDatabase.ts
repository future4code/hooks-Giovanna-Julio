import { CustomError } from '../error/CustomError';
import { Post } from '../models/Post';
import { BaseDatabase } from './BaseDatabase';

export class PostDatabase extends BaseDatabase {
	TABLE_NAME = 'labook_posts';

	public async insertPost(newPost: Post) {
		try {
			await PostDatabase.connection(this.TABLE_NAME).insert(newPost);
		} catch (error: any) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	}

	public async getById(id: string) {
		try {
			const result = await PostDatabase.connection(this.TABLE_NAME)
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
