# fastify-user-api
This is a simple Fastify-based API for user management.
It provides endpoints for listing users, adding a new user, getting user details by ID, and updating user information.

## Installation

Clone the repository:
git clone https://github.com/jemliwassel/fastify-user-api.git

## API Endpoints

### List Users
Endpoint: GET /api/user/
Description: Get a list of all users.

### Add User
Endpoint: POST /api/user/
Description: Add a new user.
Request Body: JSON object with user information.

### Get User by ID
Endpoint: GET /api/user/:id
Description: Get details of a user by their ID.
Path Parameter: User ID.

### Update User by ID
Endpoint: PUT /api/user/:id
Description: Update user information by their ID.
Path Parameter: User ID.
Request Body: JSON object with updated user information.
