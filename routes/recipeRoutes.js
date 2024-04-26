import express from 'express';
import {getAllRecipes, addRecipe} from '../controllers/recipeController.js';

const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.post('/', addRecipe);

export default recipeRouter;