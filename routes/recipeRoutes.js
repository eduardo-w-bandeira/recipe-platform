import express from 'express';
import {
  getAllRecipes,
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
recipeRouter.get('/rating', getAllRecipesWithRating);
recipeRouter.post('/', postRecipe)


// For Reviews
recipeRouter.get('/:id/reviews', getReviews);
recipeRouter.post('/:id/reviews', postReview);
recipeRouter.get('/:recipe_id/reviews/:review_id', getReviewByID);
recipeRouter.put('/:recipe_id/reviews/:review_id', updateReviewByID);
recipeRouter.delete('/:recipe_id/reviews/:review_id', deleteReviewByID);

// For User-Recipe Interaction
recipeRouter.get('/:id/users', getCreatorByRecipe);

export default recipeRouter;
