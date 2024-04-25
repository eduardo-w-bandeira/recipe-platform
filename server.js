
// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';


const URI = 'mongodb://127.0.0.1:27017';
const PORT = 3000;

// Initialize the app
const app = express();

// Configure middleware
// app.use(json());
// app.use(cors());

// 4. Set up database connection



// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});