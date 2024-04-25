import { Router } from 'express';
const router = Router();
const recipeController = require('./recipeController');

router.get('/recipes', recipeController.getAllRecipes);
router.get('/recipes/:id', recipeController.getRecipeById);
router.post('/recipes', recipeController.createRecipe);
router.put('/recipes/:id', recipeController.updateRecipe);
router.delete('/recipes/:id', recipeController.deleteRecipe);

module.exports = router;