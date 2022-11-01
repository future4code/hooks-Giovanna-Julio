import { CustomError } from '../error/CustomError';
import { BaseDatabase } from './BaseDatabase';

export class MovieDatabase extends BaseDatabase {
	TABLE_NAME = 'LABEFLIX_MOVIE';

	public async create(input: any): Promise<void> {
		try {
			await MovieDatabase.connection(this.TABLE_NAME)
				.insert(input)

		} catch (error: any) {
			throw new CustomError(error.statusCode, error.message || error.sqlMessage);
		}
	}

	public async getByName(name: string): Promise<any> {
		try {
			const result = await MovieDatabase.connection(this.TABLE_NAME)
				.select()
				.where({ name })

			return result	
		} catch (error: any) {
			throw new CustomError(error.statusCode, error.message || error.sqlMessage);
		}
	}
}
