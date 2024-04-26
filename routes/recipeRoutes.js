import express from 'express';
import {
    getAllRecipes,
    getRecipe,
    addRecipe,
    updateRecipe,
    deleteRecipe
    getReviewByID,
    getReviews,
    postReview,
    updateReviewByID,
    deleteReviewByID,
    getCreatorByRecipe,
    postRecipe,
    getAllRecipesWithRating,
} from '../controllers/recipeController.js';

const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.get('/:id', getRecipe);
recipeRouter.post('/', addRecipe);
recipeRouter.put('/:id', updateRecipe);
recipeRouter.delete('/:id', deleteRecipe);
recipeRouter.get('/rating', getAllRecipesWithRating);

// For Reviews
recipeRouter.get('/:id/reviews', getReviews);
recipeRouter.post('/:id/reviews', postReview);
recipeRouter.get('/:recipe_id/reviews/:review_id', getReviewByID);
recipeRouter.put('/:recipe_id/reviews/:review_id', updateReviewByID);
recipeRouter.delete('/:recipe_id/reviews/:review_id', deleteReviewByID);

// For User-Recipe Interaction
recipeRouter.get('/:id/users', getCreatorByRecipe);

export default recipeRouter;
