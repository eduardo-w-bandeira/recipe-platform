# Project: Recipe Sharing Platform
Description: A recipe sharing platform where users can browse (view all), create, edit and delete receipies. Users can also rate and comment on recipes.

# Technologies Used
- Backend: Express.js for server-side logic
- Database: MongoDB with Mongoose for data storage

# Features

## User Authentication
- Sign up, log in functionalities.
- Password hashing for security: Use https://www.npmjs.com/package/bcryptLinks to an external site.

## Recipe Management
- Create recipes with a title, ingredients, instructions and select category(breakfast, lunch, dinner, dessert).
- Edit and delete recipes.
- View recipes created by oneself and others.

## Search and Filter
- Search for recipes by title, ingredients, or tags.
- Filter recipes by category (e.g., breakfast, lunch, dinner, dessert).

## Rating and Comments
- Users can rate recipes and leave comments.
- Display average rating for each recipe.


# Project Structure

## Backend
- `server.js`: Main Express.js server file.
- `routes/`: Directory for route handlers.
    - `authRoutes.js`: Routes for user authentication (signup, login, logout).
    - `recipeRoutes.js`: Routes for recipe management (create, read, update, delete recipes).
- `models/`: Directory for Mongoose models.
    - `user.js`: User model for storing user information (e.g., username, password).
    - `recipe.js`: Recipe model for storing recipe details (e.g., title, ingredients, instructions, creator).
- `controllers/`: Directory for route controllers.
    - `authController.js`: Controller functions for user authentication.
    - `recipeController.js`: Controller functions for recipe management.

## Database
- MongoDB database to store user, recipe data.