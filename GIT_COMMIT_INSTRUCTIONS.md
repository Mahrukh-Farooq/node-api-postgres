# How to Commit and Push to GitHub

## Method 1: Using Git Bash (Recommended)

1. Open **Git Bash** (not PowerShell or Command Prompt)
2. Navigate to your project:
   ```bash
   cd /c/Users/mfaro/OneDrive/Desktop/node-api-postgres
   ```

3. Check status:
   ```bash
   git status
   ```

4. Add all changes:
   ```bash
   git add .
   ```

5. Commit with a message:
   ```bash
   git commit -m "Update API with improved error handling, database setup, and documentation"
   ```

6. Push to GitHub:
   ```bash
   git push
   ```

## Method 2: Using GitHub Desktop (Easiest)

1. Open GitHub Desktop
2. Select your repository: `node-api-postgres`
3. You'll see all changed files listed
4. Write commit message: "Update API with improved error handling, database setup, and documentation"
5. Click "Commit to main" (or "Commit to master")
6. Click "Push origin" button at the top

## Method 3: Using VS Code (If you use it)

1. Open VS Code in your project folder
2. Click the Source Control icon (left sidebar)
3. Stage all changes (click + next to "Changes")
4. Write commit message
5. Click ✓ to commit
6. Click "..." menu → "Push"

## What files will be committed?

✅ Will be committed:
- package.json (updated)
- queries.js (improved error handling)
- README.md (new)
- database.sql (new)
- setup-database.js (new)
- test-db.js (new)
- .gitignore (updated)
- Other documentation files

❌ Will NOT be committed (protected by .gitignore):
- .env (contains passwords - NEVER commit this!)
- node_modules/ (too large)
- *.log files

## Important Notes:

⚠️ **NEVER commit your .env file** - it contains your database password!
✅ Your .gitignore already protects it, so you're safe!

## If you get errors:

- **"Repository not found"** → Check your GitHub repository URL
- **"Authentication failed"** → You may need to authenticate with GitHub
- **"Nothing to commit"** → All changes are already committed

