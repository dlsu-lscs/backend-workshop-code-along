// User service layer for business logic
import pool from '../db/index.js';

export const createUser = async (username, email, password) => {
  try {
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, password]
    );
    return { result: { id: result.insertId, username, email } };
  } catch (err) {
    return { err };
  }
};

export const getUserById = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return { result: rows[0] };
  } catch (err) {
    return { err };
  }
};

export const getAllUsers = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    return { result: rows };
  } catch (err) {
    return { err };
  }
};

export const updateUser = async (id, username, email, password) => {
  try {
    const [result] = await pool.query(
      'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?',
      [username, email, password, id]
    );
    return { result: result.affectedRows };
  } catch (err) {
    return { err };
  }
};

export const deleteUser = async (id) => {
  try {
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
    return { result: result.affectedRows };
  } catch (err) {
    return { err };
  }
};


