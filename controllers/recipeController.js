import { RecipeModel } from "../models/recipe.js";

function index(req, res) {
    res.send('Hello World!');
};

async function getAllRecipes(req, res) {
    const data = await RecipeModel.find();
    res.json({"message": "success"});
    // return res.send("getAllRecipes controller still works!")
}

export { getAllRecipes, index };