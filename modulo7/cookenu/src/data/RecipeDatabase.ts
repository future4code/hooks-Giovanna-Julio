import { CustomError } from '../error/CustomError';
import { NewRecipe } from '../models/Types';
import { BaseDatabase } from './BaseDatabase';

export class RecipeDatabase extends BaseDatabase {
	TABLE_NAME = 'Recipes';

	public async createRecipe(input: NewRecipe) {
		try {
			await RecipeDatabase.connection(this.TABLE_NAME).insert(input);
		} catch (error) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	}

	public async getById(id: string) {
		try {
			const result = await RecipeDatabase.connection(this.TABLE_NAME)
				.select()
				.where({ id });

			return result;
		} catch (error) {
			throw new CustomError(
				error.statusCode,
				error.message || error.sqlMessage
			);
		}
	}
}
