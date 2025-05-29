# 🛠️ Mini CRUD API Project - Node.js, Express, PostgreSQL

This is a simple CRUD (Create, Read, Update, Delete) RESTful API built using **Node.js**, **Express**, and **PostgreSQL**. It was developed as part of the 3MTT software development training program (Module 3) and is a requirement for the completion of my course.

## 📦 Features

- ✅ Create new records
- 📄 Read all or single records
- 🔁 Update records
- ❌ Delete records

## 🧑‍💻 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- `pg` (node-postgres) for database connection
- dotenv for environment variable management

## 📁 Project Structure

backend_with_postgres/
├── db/ 
  └── DB_connection.js
├── controllers/
   └── users_controller.js
├── routes/
  └── get_all_users.js
  └── get_one_user.js
  └── update_user.js
  └── create_new_user.js
  └── delete_user.js
├── server.js
├── .env
├── package.json
├── 3mtt_postgres_backend.postman_collection
└── README.md
Note: the .env file will not be pushed to github for security reasons

## 2. Install Dependencies
```bash
Copy
Edit
npm install
##3. Set Up Environment Variables
Create a .env file in the root folder and add your PostgreSQL credentials:

.env
Copy
Edit
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
PORT=5000
4. Set Up PostgreSQL Table
Login to PostgreSQL and run:

```sql
Copy
Edit
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  age INTEGER
);
```
## 🚀 Running the Server
```bash
Copy
Edit
node server.js
Or with nodemon (if installed):
```
```bash
Copy
Edit
npx nodemon server.js
Server will run at:
📡 http://localhost:5000
```
## 🧪 API Endpoints
Method	Endpoint	Description
GET	/users	Get all users
GET	/users/:id	Get user by ID
POST	/users	Create new user
PUT	/users/:id	Update user by ID
DELETE	/users/:id	Delete user by ID


