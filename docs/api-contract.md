1. Authentication Endpoints:
- POST /auth/register: Register a new user.
- Request Body: { username, email, password }
- Response: { message: "User registered successfully" }
- POST /auth/login: Login user and generate authentication token.
- Request Body: { email, password }
- Response: { token: "JWT token" }
2. Recipe Endpoints:
- GET /recipes: Get all recipes.
- Response: [{ recipe object }, { recipe object }, ...]
- GET /recipes/:id: Get a specific recipe by ID.
- Response: { recipe object }
- POST /recipes: Create a new recipe.
- Request Body: { title, ingredients, instructions }
- Response: { message: "Recipe created successfully", recipe: { new recipe object } }
- PUT /recipes/:id: Update an existing recipe by ID.
- Request Body: { title?, ingredients?, instructions? }
- Response: { message: "Recipe updated successfully", recipe: { updated recipe object } }
- DELETE /recipes/:id: Delete a recipe by ID.
- Response: { message: "Recipe deleted successfully" }
3. Review Endpoints:
- GET api/recipes/:recipe_id/reviews: Retrieves all review for a specific recipe
    - Response: [{ review object }, { review object }, ...]
- GET /recipes/:recipe_id/reviews/:review_id: Retrieves a specific review for a specific recipe
- Response: { review object }
- POST /recipes/:id/review: Add a rating and a comment to a recipe.
- Request Body: {  }
- Response: { message: "Review added successfully" }
- PUT /recipes/:recipe_id/reviews/:review_id: Updates a specific review for a specific recipe
    - Request Body: {  }
    - Response: { message: "Review updated successfully" }
- DELETE /recipes/:recipe_id/reviews/:review_id: Deletes a specific review for a specific recipe
    - Request Body: {  }
    - Response: { message: "Review deleted successfully" }
4. User Profile Endpoints:
- GET /users: Get all user profiles.
- Response: { user object }
- GET /users/:id: Get user profile by ID.
- Response: { user object }
- PUT /users/:id: Update user profile by ID.
- Request Body: { username?, email?, password? }
- Response: { message: "User profile updated successfully", user: { updated user object } }
- DELETE /users/:id: Delete user profile by ID.
- Request Body: { username?, email?, password? }
- Response: { message: "User profile deleted successfully" }
5. User-Recipe Interaction
- GET /users/:user_id/recipes
    - Description: Retrieves all recipes posted by a specific user
- GET /recipes/:recipe_id/users
  - Description: Retrieves the user associated with a specific recipe
- POST /users/:user_id/recipes
  - Description: Creates a new recipe by a specific user
6. User-Review Interaction
- GET /users/:user_id/reviews
    - Description: Retrieves all reviews posted by a specific user
- GET /reviews/:review_id/users
    - Description: Retrieves the user associated with a specific review
- POST /users/user_id/reviews
    - Description: Creates a new review by a specific user
