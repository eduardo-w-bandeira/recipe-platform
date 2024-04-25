import express from 'express';
import {
  getAllUsers,
  getUserByID,
  updateUserByID,
  deleteUserByID,
  getRecipesByUser,
  createRecipeByUser,
  getReviewsByUser,
  postReviewByUser,
} from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserByID);
userRouter.put('/:id', updateUserByID);
userRouter.delete('/:id', deleteUserByID);
userRouter.get('/:id/recipes', getRecipesByUser);
userRouter.post('/:id/recipes', createRecipeByUser);
userRouter.get('/:id/reviews', getReviewsByUser);
userRouter.post('/:id/reviews', postReviewByUser);

export default userRouter;
