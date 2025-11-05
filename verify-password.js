const dotenv = require('dotenv')
dotenv.config()

const Pool = require('pg').Pool

console.log('Testing database connection with password: Maha786')
console.log('Reading from .env file...')
console.log('DB_USER:', process.env.DB_USER || 'postgres')
console.log('DB_HOST:', process.env.DB_HOST || 'localhost')
console.log('DB_NAME:', process.env.DB_NAME || 'postgres')
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '(SET - length: ' + process.env.DB_PASSWORD.length + ')' : '(NOT SET)')
console.log('DB_PORT:', process.env.DB_PORT || 5432)
console.log('\nAttempting to connect...\n')

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'postgres',
    password: process.env.DB_PASSWORD || undefined,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
})

async function testConnection() {
    try {
        const client = await pool.connect()
        console.log('✅ SUCCESS! Database connection successful!')
        console.log('✅ The password "Maha786" is CORRECT!\n')
        
        // Check if users table exists
        const tableCheck = await client.query(`
            SELECT EXISTS (
                SELECT FROM information_schema.tables 
                WHERE table_schema = 'public' 
                AND table_name = 'users'
            );
        `)
        
        if (tableCheck.rows[0].exists) {
            console.log('✅ Users table exists!')
            const countResult = await client.query('SELECT COUNT(*) FROM users')
            console.log(`📊 Total users: ${countResult.rows[0].count}`)
        } else {
            console.log('❌ Users table does NOT exist!')
            console.log('   You need to create it using database.sql')
        }
        
        client.release()
        await pool.end()
        process.exit(0)
    } catch (error) {
        console.error('❌ CONNECTION FAILED!')
        console.error('Error:', error.message)
        
        if (error.message.includes('password authentication failed')) {
            console.error('\n❌ The password "Maha786" is INCORRECT!')
            console.error('   Please check your PostgreSQL password.')
        } else if (error.message.includes('database') && error.message.includes('does not exist')) {
            console.error('\n❌ Database does not exist!')
            console.error('   Please create the database first.')
        } else {
            console.error('\n❌ Connection error occurred.')
        }
        
        await pool.end()
        process.exit(1)
    }
}

testConnection()

