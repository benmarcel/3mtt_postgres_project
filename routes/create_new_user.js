import express from 'express';
const router = express.Router();
import users from '../controllers/users_controller.js';
const { createUser} = users;
// Define a route to create a new user
router.post('/users', createUser);
// Export the router to be used in the main server file
export default router;
// This code defines a route to create a new user in the database
// using the `createUser` function from the `users_controller.js` file.
// The route is set up to respond to POST requests at the `/users` endpoint.
// When a request is made to this endpoint, the `createUser` function will be called,
// which is responsible for handling the logic of creating a new user in the database.