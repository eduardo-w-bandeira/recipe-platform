import express from 'express';
import {
    getAllRecipes,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getReviewByID,
    getReviews,
    postReview,
    updateReviewByID,
    deleteReviewByID,
    getCreatorByRecipe,
    getAllRecipesWithRating,
} from '../controllers/recipeController.js';

const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.post('/', createRecipe);
recipeRouter.get('/rating', getAllRecipesWithRating); // Changed the order because endpoints are used in a defined sequence
recipeRouter.get('/:id', getRecipe);
recipeRouter.put('/:id', updateRecipe);
recipeRouter.delete('/:id', deleteRecipe);

// For Reviews
recipeRouter.get('/:id/reviews', getReviews);
recipeRouter.post('/:id/reviews', postReview);
recipeRouter.get('/:recipe_id/reviews/:review_id', getReviewByID);
recipeRouter.put('/:recipe_id/reviews/:review_id', updateReviewByID);
recipeRouter.delete('/:recipe_id/reviews/:review_id', deleteReviewByID);

// For User-Recipe Interaction
recipeRouter.get('/:id/users', getCreatorByRecipe);

export default recipeRouter;
