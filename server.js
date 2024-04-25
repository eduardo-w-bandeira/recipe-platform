
// Import necessary modules
import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

// Initialize the app
const app = express();

// Configure middleware
app.use(json());
app.use(cors());

// 4. Set up database connection
import mongoose from 'mongoose';


// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});