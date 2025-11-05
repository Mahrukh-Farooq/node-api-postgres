const dotenv = require('dotenv')
dotenv.config()

console.log('Current .env configuration:')
console.log('DB_USER:', process.env.DB_USER || '(not set)')
console.log('DB_HOST:', process.env.DB_HOST || '(not set)')
console.log('DB_NAME:', process.env.DB_NAME || '(not set)')
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '(SET - ' + process.env.DB_PASSWORD.length + ' characters)' : '(EMPTY/NOT SET)')
console.log('DB_PORT:', process.env.DB_PORT || '(not set)')

if (!process.env.DB_PASSWORD || process.env.DB_PASSWORD.trim() === '') {
    console.log('\n⚠️  WARNING: DB_PASSWORD is empty!')
    console.log('\nCommon PostgreSQL password scenarios:')
    console.log('1. If you installed PostgreSQL yourself, you set a password during installation')
    console.log('2. If PostgreSQL was installed with default settings, password might be:')
    console.log('   - Empty (no password)')
    console.log('   - "postgres" (common default)')
    console.log('   - "admin" or "root"')
    console.log('\nTo find your password:')
    console.log('- Check your PostgreSQL installation notes')
    console.log('- Try connecting with pgAdmin or another PostgreSQL client')
    console.log('- Or reset the password if needed')
}

