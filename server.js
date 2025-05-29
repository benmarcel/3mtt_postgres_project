import express from 'express';
const app = express();
app.use(express.json());
import pool from './db/DB_connection.js';
import { getClient, releaseClient } from "./db/DB_connection.js"

// testing the connection pool

const client = await getClient();
releaseClient(client);
// Define a simple route to test the API
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});
// user API routes
import getAllUsers from './routes/get_all_users.js';
import getUserById from './routes/get_one_user.js';
import updateUser from './routes/update_user.js';
import createUser from './routes/create_new_user.js';
import deleteUser from './routes/delete_user.js';

// use the user API routes
app.use(getAllUsers);
app.use(getUserById);
app.use(updateUser);
app.use(createUser);
app.use(deleteUser);

// server listening on port 5000
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
