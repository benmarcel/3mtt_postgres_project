import express from 'express';
const router = express.Router();
import users from '../controllers/users_controller.js'; 
const {getAllUsers} = users;
router.get("/users", getAllUsers)
// Export the router to be used in the main server file
export default router;
// This code defines a route to get all users from the database
// using the `getAllUsers` function from the `users_controller.js` file.
// The route is set up to respond to GET requests at the `/users` endpoint.