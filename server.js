import express from 'express';
import mongoose from 'mongoose';
import {recipeRouter} from './routes/recipeRoutes.js';

const PORT = 3000;
const URI = 'mongodb://127.0.0.1:27017';

// Initialize the app
const app = express();

// Middlewares
app.use(express.json());
app.use(recipeRouter);


// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await mongoose.connect(URI);
  console.log("Mongoose connection opened");
});