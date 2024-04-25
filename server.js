
// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';

const URI = 'mongodb://127.0.0.1:27017';
const PORT = 3000;

// Initialize the app
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await mongoose.connect(URI);
  console.log("Mongoose connection opened");
});