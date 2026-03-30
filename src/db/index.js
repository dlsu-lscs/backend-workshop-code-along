import mysql from 'mysql2/promise';
import 'dotenv/config';
// Update these values for your MySQL server
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD, // set your MySQL root password
  database: 'public',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 3306,
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
