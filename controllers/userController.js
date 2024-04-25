import mongoose from 'mongoose';
import { User } from '../models/user.js';
import { Recipe } from '../models/recipe.js';

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
  if (!req.params.id) {
    throw new Error("Can't receive User ID");
  }
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (err) {
    console.error(`Unable to retrieve a user by ID: ${err}`);
    res.status(500).send({ message: err.message });
  }
}

export async function updateUserByID(req, res) {
  if (!req.params.id) {
    throw new Error("Can't receive User ID");
  }
  // TODO: need to research
  const { username, email, password } = req.body;
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const updatedUser = await User.findByIdAndUpdate(
      { _id: id },
      { username: username, email: email, password: password }
    );
    res.status(200).send(updatedUser);
  } catch (err) {
    console.error(`Unable to update a user by ID: ${err}`);
    res.status(500).send({ message: err.message });
  }
}

export async function deleteUserByID(req, res) {
  if (!req.params.id) {
    throw new Error("Can't receive User ID");
  }
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).send(deletedUser);
  } catch (err) {
    console.error(`Unable to delete a user by ID: ${err}`);
    res.status(500).send({ message: err.message });
  }
}

// For Entities Interaction Endpoints
// !!Not checked if the following controllers work

// User-Recipe Interaction
export async function getRecipesByUser(req, res) {
  try {
    const userID = new mongoose.Types.ObjectId(
      req.params.id
    ).toString();
    const recipeList = await Recipe.aggregate([
      {
        $match: {
          $eq: ['$creator', userID],
        },
      },
    ]);
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
    const creator = new mongoose.Types.ObjectId(
      req.params.id
    ).toString();
    const { title, ingredients, instructions, category } = req.body;

    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      category,
      creator,
    });
    await newRecipe.save();
    res.status(200).send(newRecipe);
  } catch (err) {
    console.error(`Unable to post a new recipe by a specific user: ${err}`);
    res.status(500).send({ message: err.message });
  }
}

// User-Review Interaction
export async function getReviewsByUser(req, res) {
  try {
    const userID = new mongoose.Types.ObjectId(
      req.params.id
    ).toString();
    const reviewList = await Review.aggregate([
      {
        $match: {
          $eq: ['$user', userID],
        },
      },
    ]);
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
    const user = new mongoose.Types.ObjectId(req.params.id).toString();
    const { rating, recipe } = req.body;
    const comment = req.body.comment ?? null;

    const newReview = new Review({
      rating,
      comment,
      recipe,
      user,
    });
    await newReview.save();
    res.status(200).send(newReview);
  } catch (err) {
    console.error(`Unable to post a new review by a specific user: ${err}`);
    res.status(500).send({ message: err.message });
  }
}
