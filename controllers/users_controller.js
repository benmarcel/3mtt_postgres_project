// DB_connection.js
import { query } from "../db/DB_connection.js";

 const getAllUsers = async (req, res) => {
  try {
    const users = await query('SELECT * FROM users');
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
 const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await query('SELECT * FROM users WHERE id = $1', [id]);
    if (users.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(users[0]);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
 const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
     if (!name || !email || !age) {
      return res.status(400).json({ error: 'Name, email, and age are required' });     
    }
    const result = await query('INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *', [name, email, age]);
    res.status(201).json(result[0]);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
 const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    if (!name || !email || !age) {
      return res.status(400).json({ error: 'Name, email, and age are required' });  
        
    }
    const result = await query('UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *', [name, email, age, id]);
    if (result.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(result[0]);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
 const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    if (result.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
// Export all functions for use in routes
export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
