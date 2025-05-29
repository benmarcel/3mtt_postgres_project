import express from 'express';
const router = express.Router();
import users from '../controllers/users_controller.js';
const { deleteUser } = users;
// Define a route to delete a user by ID
router.delete('/users/:id', deleteUser);
// Export the router to be used in the main server file
export default router;
// This code defines a route to delete a user by their ID from the database
// using the `deleteUser` function from the `users_controller.js` file.
// The route is set up to respond to DELETE requests at the `/users/:id` endpoint,
// where `:id` is a placeholder for the user's ID. When a request is made to this endpoint,