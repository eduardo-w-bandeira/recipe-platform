import express from 'express';
import {
    getAllRecipes,
    getRecipe,
    addRecipe,
    updateRecipe,
    deleteRecipe
} from '../controllers/recipeController.js';

const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.get('/:id', getRecipe);
recipeRouter.post('/', addRecipe);
recipeRouter.put('/:id', updateRecipe);
recipeRouter.delete('/:id', deleteRecipe);

export default recipeRouter;