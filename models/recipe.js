import mongoose from 'mongoose';
import { User } from './user.js';

const recipeSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        ingredients: { type: String, required: true },
        instructions: { type: String, required: true },
        category: { type: String, required: true },
        creator: { type: mongoose.Schema.Types.ObjectId, ref: User },
    },
    { timestamps: true }
);

export const RecipeModel = mongoose.model('Recipe', recipeSchema);
