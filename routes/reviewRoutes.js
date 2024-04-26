import express from 'express';
import mongoose from 'mongoose';
import { Review } from '../models/review.js';
const reviewRouter = express.Router();

// Other routes and methods for review are inside the recipe and user routes/controllers

// retrieve a user by review id
reviewRouter.get('/:id/users', async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  try {
    const review = await Review.findById(id).populate('user')
    res.status(200).send(review.user);
  } catch (err) {
    console.error('Unable to find a user of this review');
    res.status(500).send({ message: err.message });
  }
});

export default reviewRouter;
