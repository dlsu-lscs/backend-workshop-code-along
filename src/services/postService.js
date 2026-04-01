import pool from '../db/index.js';

export const createPost = async (user_id, body) => {
  try {
    const [result] = await pool.query(
      'INSERT INTO posts (user_id, body) VALUES (?, ?)',
      [user_id, body]
    );
    return { result: { id: result.insertId, user_id, body } };
  } catch (err) {
    return { err };
  }
};

export const getPostById = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM posts WHERE id = ?', [id]);
    return { result: rows[0] };
  } catch (err) {
    return { err };
  }
};

export const getAllPosts = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM posts');
    return { result: rows };
  } catch (err) {
    return { err };
  }
};

export const updatePost = async (id, user_id, body) => {
  try {
    const [result] = await pool.query(
      'UPDATE posts SET user_id = ?, body = ? WHERE id = ?',
      [user_id, body, id]
    );
    return { result: result.affectedRows };
  } catch (err) {
    return { err };
  }
};

export const deletePost = async (id) => {
  try {
    const [result] = await pool.query('DELETE FROM posts WHERE id = ?', [id]);
    return { result: result.affectedRows };
  } catch (err) {
    return { err };
  }
};
