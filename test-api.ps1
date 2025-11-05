# PowerShell commands to test your API

# 1. Get all users
curl http://localhost:3000/users

# 2. Create a user (PowerShell syntax)
Invoke-WebRequest -Uri http://localhost:3000/users -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"name":"John Doe","email":"john@example.com"}'

# Or using Invoke-RestMethod (returns JSON directly)
Invoke-RestMethod -Uri http://localhost:3000/users -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"name":"John Doe","email":"john@example.com"}'

# 3. Get user by ID
curl http://localhost:3000/users/1

# 4. Update a user
Invoke-RestMethod -Uri http://localhost:3000/users/1 -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"name":"Jane Doe","email":"jane@example.com"}'

# 5. Delete a user
Invoke-RestMethod -Uri http://localhost:3000/users/1 -Method DELETE

