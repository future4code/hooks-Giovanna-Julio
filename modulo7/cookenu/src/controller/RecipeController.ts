import { Request, Response } from 'express';
import { RecipeBusiness } from '../business/RecipeBusiness';
import { AuthType, NewRecipeDTO } from '../models/DTOs';

export class RecipeController {
	public createRecipe = async (req: Request, res: Response) => {
		try {
			const { title, instructions } = req.body;
			const token = req.headers.authorization as AuthType;

			const date = new Date().toLocaleDateString as any;

			const newRecipe: NewRecipeDTO = {
				token,
				title,
				instructions,
				date,
			};

			await new RecipeBusiness().createRecipe(newRecipe);

			res.status(201).send({ message: 'Recipe successfully inserted.' });
		} catch (error) {
			res.status(error.status).send(error.message || error.sqlMessage);
		}
	};

	public async getRecipe(req: Request, res: Response) {
		try {
			const token = req.headers.authorization as AuthType;
			const recipeId = req.params.id;

			const recipe = await new RecipeBusiness().getRecipe({
				token,
				recipeId,
			});

			res.status(200).send(recipe);
		} catch (error) {
			res.status(error.status).send(error.message || error.sqlMessage);
		}
	}
}
