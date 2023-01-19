import { RecipeDatabase } from '../data/RecipeDatabase';
import { UserDatabase } from '../data/UserDatabase';
import { CustomError } from '../error/CustomError';
import { InvalidInput } from '../error/InvalidInput';
import { NewRecipeDTO } from '../models/DTOs';
import { NewRecipe } from '../models/Types';
import { Authenticator } from './services/authenticator';
import { generateId } from './services/generateId';

export class RecipeBusiness {
	public createRecipe = async (input: NewRecipeDTO) => {
		try {
			if (
				!input.token ||
				!input.title ||
				!input.instructions ||
				!input.date
			) {
				throw new InvalidInput();
			}

			const payload = new Authenticator().getTokenData(input.token);
			const verifyUser = await new UserDatabase().getById(payload.id);

			if (!verifyUser.length) {
				throw new InvalidInput();
			}

			const newRecipe: NewRecipe = {
				id: generateId(),
				userId: payload.id,
				title: input.title,
				instructions: input.instructions,
				date: input.date,
			};

			await new RecipeDatabase().createRecipe(newRecipe);
		} catch (error) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	};

	public async getRecipe(input: any) {
		try {
			if (!input.token || typeof input.token !== 'string') {
				throw new InvalidInput();
			}

			const recipeDatabase = new RecipeDatabase();

			const recipe = await recipeDatabase.getById(input.recipeId);

			if (!recipe.length) {
				throw new InvalidInput();
			}

			return {
				id: recipe[0].id,
				title: recipe[0].title,
				email: recipe[0].instructions,
				date: recipe[0].date,
			};
		} catch (error) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	}
}
