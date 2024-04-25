import express from 'express';
import {getAllRecipes, index} from '../controllers/recipeController.js';

const recipeRouter = express.Router();

recipeRouter.get('/', index);
recipeRouter.get('/recipes', getAllRecipes);

export {recipeRouter};