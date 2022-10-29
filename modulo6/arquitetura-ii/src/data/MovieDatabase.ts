import { BaseDatabase } from './BaseDatabase';

export class MovieDatabase extends BaseDatabase {
	private static TABLE_NAME = 'LABEFLIX_MOVIE';

	public async create(input: any): Promise<void> {
		try {
			await MovieDatabase.connection
				.insert(input)
				.into(MovieDatabase.TABLE_NAME);
		} catch (error: any) {
			throw new Error(error.message);
		}
	}
}
