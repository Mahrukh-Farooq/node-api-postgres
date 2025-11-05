# Database Setup Instructions

## Step 1: Create .env file
Create a `.env` file in the root directory with your database credentials:

```
DB_USER=postgres
DB_HOST=localhost
DB_NAME=postgres
DB_PASSWORD=your_password_here
DB_PORT=5432
```

## Step 2: Install Dependencies
```bash
npm install
```

## Step 3: Create Database and Table
Connect to PostgreSQL and run the SQL commands from `database.sql`:

```bash
# Option 1: Using psql command line
psql -U postgres -d postgres -f database.sql

# Option 2: Using psql interactively
psql -U postgres
\c postgres
\i database.sql
```

Or manually run:
```sql
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);
```

## Step 4: Test Database Connection
```bash
npm run test-db
```

This will:
- Test the database connection
- Check if the users table exists
- Show all users in the database

## Step 5: Start the Server
```bash
npm start
```

## Test the API
```bash
# Get all users
curl http://localhost:3000/users

# Get user by ID
curl http://localhost:3000/users/1

# Create a user
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com"}'
```

