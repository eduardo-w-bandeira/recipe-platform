1. Authentication Endpoints:
- POST /api/auth/register: Register a new user.
- Request Body: { username, email, password }
- Response: { message: "User registered successfully" }
- POST /api/auth/login: Login user and generate authentication token.
- Request Body: { email, password }
- Response: { token: "JWT token" }
2. Recipe Endpoints:
- GET /api/recipes: Get all recipes.
- Response: [{ recipe object }, { recipe object }, ...]
- GET /api/recipes/:id: Get a specific recipe by ID.
- Response: { recipe object }
- POST /api/recipes: Create a new recipe.
- Request Body: { title, ingredients, instructions }
- Response: { message: "Recipe created successfully", recipe: { new recipe object } }
- PUT /api/recipes/:id: Update an existing recipe by ID.
- Request Body: { title?, ingredients?, instructions? }
- Response: { message: "Recipe updated successfully", recipe: { updated recipe object } }
- DELETE /api/recipes/:id: Delete a recipe by ID.
- Response: { message: "Recipe deleted successfully" }
3. Rating and Comment Endpoints:
- POST /api/recipes/:id/ratings: Rate a recipe.
- Request Body: { rating }
- Response: { message: "Rating added successfully" }
- POST /api/recipes/:id/comments: Add a comment to a recipe.
- Request Body: { comment }
- Response: { message: "Comment added successfully" }
4. User Profile Endpoints:
- GET /api/users/:id: Get user profile by ID.
- Response: { user object }
- PUT /api/users/:id: Update user profile by ID.
- Request Body: { username?, email?, password? }
- Response: { message: "User profile updated successfully", user: { updated user object } }