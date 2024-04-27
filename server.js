import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import recipeRouter from './routes/recipeRoutes.js';
import reviewRouter from './routes/reviewRoutes.js';

const URI = 'mongodb://127.0.0.1:27017';
const PORT = 3000;

// Initialize the app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Recipe Sharing Platform');
});
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/recipes', recipeRouter);
app.use('/reviews', reviewRouter);
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await mongoose.connect(URI);
  console.log('Mongoose connection opened');
});
