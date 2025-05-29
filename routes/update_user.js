import express from 'express';
const router = express.Router();
import users from '../controllers/users_controller.js';
const { updateUser } = users;
// Define a route to update a user by ID
router.put('/users/:id', updateUser);
// Export the router to be used in the main server file
export default router;
// This code defines a route to update a user by their ID in the database
// using the `updateUser` function from the `users_controller.js` file. 