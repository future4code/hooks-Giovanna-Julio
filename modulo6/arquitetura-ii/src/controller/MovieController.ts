import { Request, Response } from 'express';
import { MovieBusiness } from '../business/MovieBusiness';
import { IMovieInputDTO } from '../models/IMovieInputDTO';

export class MovieController {
	private movieBusiness = new MovieBusiness();

	public async create(req: Request, res: Response): Promise<void> {
		try {
			const { name, description, durationInMinutes, yearOfRelease } =
				req.body;

			const input: IMovieInputDTO = {
				name,
				description,
				duration_in_minutes: durationInMinutes,
				year_of_release: yearOfRelease
			}
			
			await this.movieBusiness.create(input);

			res.status(201).send({ message: 'Movie created successfully.' });
		} catch (error: any) {
			res.status(400).send(error.message || error.sqlMessage);
		}
	}
}
