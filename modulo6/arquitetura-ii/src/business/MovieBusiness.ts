import { MovieDatabase } from '../data/MovieDatabase';
import { CustomError } from '../error/CustomError';
import { DuplicateEntry } from '../error/DuplicateEntry';
import { InvalidInput } from '../error/InvalidInput';
import { IMovieInputDTO } from '../models/IMovieInputDTO';
import { Movie } from '../models/Movie';
import { generateId } from '../services/generateId';

export class MovieBusiness {
	private movieDatabase = new MovieDatabase();

	public async create(input: IMovieInputDTO): Promise<void> {
		try {
			if (
				!input.name ||
				!input.description ||
				!input.duration_in_minutes ||
				!input.year_of_release

			) { throw new InvalidInput(); }
			

			if (input.duration_in_minutes > 360 || input.year_of_release > 2022) {
				throw new InvalidInput();
			}

			const verifyName = await this.movieDatabase.getByName(input.name)

			if (verifyName.length) {
				throw new DuplicateEntry()
			}

			const newMovie = new Movie(
				generateId(),
				input.name,
				input.description,
				input.duration_in_minutes,
				input.year_of_release
			);

			await this.movieDatabase.create({ newMovie });
		} catch (error: any) {
			throw new CustomError(error.statusCode, error.message || error.sqlMessage);
		}
	}
}
