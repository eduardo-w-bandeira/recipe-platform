// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import recipeRouter from './routes/recipeRoutes.js';

const URI = 'mongodb://127.0.0.1:27017';
const PORT = 3000;

// Initialize the app
const app = express();
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Recipt Social Platform');
});
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/recipes', recipeRouter);

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await mongoose.connect(URI);
  console.log('Mongoose connection opened');
});
