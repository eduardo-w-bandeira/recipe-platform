import { Recipe } from "../models/recipe.js";

export async function getAllRecipes(req, res) {
    const data = await Recipe.find();
    res.json(data);
};

export async function addRecipe(req, res) {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.json(recipe);
};