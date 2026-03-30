
import * as userService from '../services/userService.js';

export const createUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  const errors = [];
  if (!username || typeof username !== 'string' || username.length < 3) {
    errors.push('Username is required and must be at least 3 characters.');
  }
  if (!email || typeof email !== 'string' || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    errors.push('A valid email is required.');
  }
  if (!password || typeof password !== 'string' || password.length < 6) {
    errors.push('Password is required and must be at least 6 characters.');
  }
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  const { result } = await userService.createUser(username, email, password);
  res.status(201).json(result);
};

export const getUser = async (req, res, next) => {
  const { result } = await userService.getUserById(req.params.id);
  res.json(result);
};

export const getAllUsers = async (req, res, next) => {
  const { result } = await userService.getAllUsers();
  res.json(result);
};

export const updateUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  const errors = [];
  if (!username || typeof username !== 'string' || username.length < 3) {
    errors.push('Username is required and must be at least 3 characters.');
  }
  if (!email || typeof email !== 'string' || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    errors.push('A valid email is required.');
  }
  if (!password || typeof password !== 'string' || password.length < 6) {
    errors.push('Password is required and must be at least 6 characters.');
  }
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  await userService.updateUser(req.params.id, username, email, password);
  res.json({ message: 'User updated' });
};

export const deleteUser = async (req, res, next) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: 'User deleted' });
};
