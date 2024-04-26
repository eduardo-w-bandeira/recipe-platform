import { Recipe } from "../models/recipe.js";

export async function getAllRecipes(req, res) {
    const data = await Recipe.find();
    res.json(data);
};

export async function getRecipe(req, res) {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
};

export async function addRecipe(req, res) {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.json({ "message": "Recipe created successfully", "recipe": recipe});
};

export async function updateRecipe(req, res) {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ "message": "Recipe updated successfully", "recipe": recipe });
};

export async function deleteRecipe(req, res) {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ "message": "Recipe deleted successfully" });
};
