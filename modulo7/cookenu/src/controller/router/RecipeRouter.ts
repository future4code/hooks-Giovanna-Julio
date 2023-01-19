import express from 'express';
import { RecipeController } from '../RecipeController';

export const recipeRouter = express.Router();

const recipeController = new RecipeController();

recipeRouter.post('/', recipeController.createRecipe);
recipeRouter.get('/:id', recipeController.getRecipe);