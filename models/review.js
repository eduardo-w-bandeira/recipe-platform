import mongoose from 'mongoose';
import { User } from './user.js';
import { Recipe } from './recipe.js';

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: User },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: Recipe },
    rating: { type: String, required: true },
    comment: { type: String }, // accepts blank
  },
  { timestamps: true }
);

export const Review = mongoose.model('Review', reviewSchema);
