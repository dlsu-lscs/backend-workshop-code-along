// User service layer for business logic
import pool from '../db/index.js';

export const createUser = async (name, bio) => {
  try {
    const [result] = await pool.query(
      'INSERT INTO users (name, bio) VALUES (?, ?)',
      [name, bio]
    );
    return { result: { id: result.insertId, name, bio } };
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

export const updateUser = async (id, name, bio) => {
  try {
    const [result] = await pool.query(
      'UPDATE users SET name = ?, bio = ? WHERE id = ?',
      [name, bio, id]
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


