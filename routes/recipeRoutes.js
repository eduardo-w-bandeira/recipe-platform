import express from 'express';
import {getAllRecipes} from '../controllers/recipeController.js';

const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);

export default recipeRouter;