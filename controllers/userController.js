import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { User } from '../models/user.js';
import { Recipe } from '../models/recipe.js';
import { Review } from '../models/review.js';

// For Sole Entity Endpoints
export async function getAllUsers(req, res) {
  try {
    const usersList = await User.find();
    res.status(200).send(usersList);
  } catch (err) {
    console.error(`Unable to retrieve users: ${err}`);
    res.status(500).send({ message: err.message });
  }
}

export async function getUserByID(req, res) {
  const id = new mongoose.Types.ObjectId(req.params.id);
  try {
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (err) {
    console.error(`Unable to retrieve a user by ID: ${err}`);
    res.status(500).send({ message: err.message });
  }
}

export async function updateUserByID(req, res) {
  const { username, email, password } = req.body;
  const id = new mongoose.Types.ObjectId(req.params.id);
  try {
    const loginUser = await User.findById(id);
    const match = await bcrypt.compare(password, loginUser.password);
    if (match) {
      const updatedUser = await User.findByIdAndUpdate(
        { _id: id },
        { username, email }
      );
      res.status(200).send('User updated successfully');
    } else {
      throw new Error('Password is wrong. Try again');
    }
  } catch (err) {
    console.error(`Unable to update a user by ID: ${err}`);
    res.status(500).send({ message: err.message });
  }
}

export async function deleteUserByID(req, res) {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const password = req.body.password;
  try {
    const loginUser = await User.findById(id);
    const match = await bcrypt.compare(password, loginUser.password);
    if (match) {
      const deletedUser = await User.findByIdAndDelete(id);
      res.status(200).send('User deleted successfully');
    } else {
      throw new Error('Password is wrong. Try again');
    }
  } catch (err) {
    console.error(`Unable to delete a user by ID: ${err}`);
    res.status(500).send({ message: err.message });
  }
}

// For Entities Interaction Endpoints

// User-Recipe Interaction
export async function getRecipesByUser(req, res) {
  try {
    const userID = new mongoose.Types.ObjectId(req.params.id);
    const recipeList = await Recipe.find({ creator: userID }).exec();
    res.status(200).send(recipeList);
  } catch (err) {
    console.error(
      `Unable to retrieve all recipes posted by a specific user: ${err}`
    );
    res.status(500).send({ message: err.message });
  }
}

export async function createRecipeByUser(req, res) {
  try {
    const creator = new mongoose.Types.ObjectId(req.params.id);
    const { title, ingredients, instructions, category } = req.body;

    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      category,
      creator,
    });
    await newRecipe.save();
    res.status(200).send('Recipe created successfully');
  } catch (err) {
    console.error(`Unable to post a new recipe by a specific user: ${err}`);
    res.status(500).send({ message: err.message });
  }
}

// User-Review Interaction
export async function getReviewsByUser(req, res) {
  try {
    const userID = new mongoose.Types.ObjectId(req.params.id);
    const reviewList = await Review.find({ user: userID });
    res.status(200).send(reviewList);
  } catch (err) {
    console.error(
      `Unable to retrieve all reviews posted by a specific user: ${err}`
    );
    res.status(500).send({ message: err.message });
  }
}

export async function postReviewByUser(req, res) {
  try {
    const user = new mongoose.Types.ObjectId(req.params.id);
    const recipe = new mongoose.Types.ObjectId(req.body.recipe);
    const { rating } = req.body;
    const comment = req.body?.comment ?? null;

    const newReview = new Review({
      rating,
      comment,
      recipe,
      user,
    });
    await newReview.save();
    res.status(200).send('Review posted successfully');
  } catch (err) {
    console.error(`Unable to post a new review by a specific user: ${err}`);
    res.status(500).send({ message: err.message });
  }
}
