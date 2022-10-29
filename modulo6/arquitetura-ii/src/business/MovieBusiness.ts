import { MovieDatabase } from '../data/MovieDatabase';
import { v4 as generateId } from 'uuid';
import { Movie } from '../types/Movie';

export class MovieBusiness {
	private movieDatabase = new MovieDatabase();

	public async create({
		name,
		description,
		duration_in_minutes,
		year_of_release,
	}: any): Promise<void> {
		try {
			if (
				!name ||
				!description ||
				!duration_in_minutes ||
				!year_of_release
			) {
				throw new Error(
					'Invalid data. (name, description, duration in minutes, year of release)'
				);
			}

			const newMovie = new Movie(
				generateId(),
				name,
				description,
				duration_in_minutes,
				year_of_release
			);

			await this.movieDatabase.create({ newMovie });
		} catch (error: any) {
			throw new Error(error.message);
		}
	}
}
