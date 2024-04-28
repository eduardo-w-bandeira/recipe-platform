import mongoose from 'mongoose';
import { User } from './user.js';

const recipeSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        ingredients: { type: String, required: true },
        instructions: { type: String, required: true },
        category: { type: String, enum: { values: ['Breakfast', 'Lunch', 'Dinner', 'Dessert'], message: '{VALUE} is not supported. Please select from Breakfast, Lunch, Dinner, or Dessert'}, required: true },
        tags: { type: [String], required: false },
        creator: { type: mongoose.Schema.Types.ObjectId, ref: User },
    },
    { timestamps: true }
);

export const Recipe = mongoose.model('Recipe', recipeSchema);
