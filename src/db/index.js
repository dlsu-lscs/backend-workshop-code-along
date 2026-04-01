import mysql from 'mysql2/promise';
import 'dotenv/config';
// Update these values for your MySQL server
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // best practice: process.env
  password: process.env.DB_PASSWORD, // set your MSQyL root password
  database: 'dummy', //replace with database name | process.env.DB_NAME
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 3306,   // process.env.DEB_PORT || 3306
});

async function checkDbConnection() {
  try {
    const conn = await pool.getConnection();
    await conn.ping();
    console.log('MySQL database connection successful');
    conn.release();
  } catch (err) {
    console.error('MySQL database connection failed:', err.message);
  }
}
checkDbConnection();

export default pool;
