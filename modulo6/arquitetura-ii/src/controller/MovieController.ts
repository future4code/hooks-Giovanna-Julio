import { Request, Response } from 'express';
import { MovieBusiness } from '../business/MovieBusiness';

export class MovieController {
	private movieBusiness = new MovieBusiness();

	public async create(req: Request, res: Response): Promise<void> {
		try {
			const { name, description, duration_in_minutes, year_of_release } =
				req.body;

			await this.movieBusiness.create({
				name,
				description,
				duration_in_minutes,
				year_of_release,
			});

			res.status(201).send({ message: 'Movie created successfully.' });
		} catch (error: any) {
			res.status(400).send(error.message);
		}
	}
}
