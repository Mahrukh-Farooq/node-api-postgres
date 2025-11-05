# How to Change PostgreSQL Password

## Option 1: Using psql (Command Line)

1. Open Command Prompt or PowerShell as Administrator
2. Navigate to PostgreSQL bin directory (usually something like):
   ```
   cd "C:\Program Files\PostgreSQL\15\bin"
   ```
   (Replace 15 with your PostgreSQL version)

3. Connect to PostgreSQL:
   ```
   psql -U postgres
   ```
   (Enter your current password when prompted)

4. Change the password:
   ```sql
   ALTER USER postgres WITH PASSWORD 'Maha786';
   ```

5. Exit psql:
   ```
   \q
   ```

## Option 2: Using pgAdmin (GUI)

1. Open pgAdmin
2. Connect to your PostgreSQL server
3. Right-click on "Login/Group Roles" → "postgres"
4. Go to "Definition" tab
5. Enter new password: `Maha786`
6. Click "Save"

## Option 3: Using SQL Shell (psql)

1. Open SQL Shell (psql) from Start Menu
2. Enter your current password
3. Run:
   ```sql
   ALTER USER postgres WITH PASSWORD 'Maha786';
   ```

## After Changing Password:

Your .env file already has: `DB_PASSWORD=Maha786`

So once you change the PostgreSQL password to `Maha786`, restart your server and test!

