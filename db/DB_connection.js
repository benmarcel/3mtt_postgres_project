// DB_connection.js
import dotenv from 'dotenv';
dotenv.config();
// Importing the pg module for PostgreSQL connection pooling
// and query execution
import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection cannot be established
});

// Run a query with optional parameters
export const query = async (text, params) => {
  try {
    const res = await pool.query(text, params);
    return res.rows;
  } catch (err) {
    console.error('Database query error:', err);
    throw err;
  }
};

// Get a client from the pool (for transactions, etc.)
export const getClient = async () => {
  try {
    const client = await pool.connect();
    console.log('Client successfully connected to the pool');
    
    return client;
  } catch (err) {
    console.error('Error getting client from pool:', err);
    throw err;
  }
};

// Release a client manually
export const releaseClient = (client) => {
  try {
    if (client) client.release();
  } catch (err) {
    console.error('Error releasing client:', err);
  }
};

// Export the pool for use in other modules

export default pool;
