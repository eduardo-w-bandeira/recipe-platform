import { Recipe } from "../models/recipe.js";

export async function getAllRecipes(req, res) {
    const data = await Recipe.find();
    res.json(data);
};
