
import * as userService from '../services/userService.js';

export const createUser = async (req, res, next) => {
  const { name, bio } = req.body;
  const { result } = await userService.createUser(name, bio);
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
  const { name, bio } = req.body;
  await userService.updateUser(req.params.id, name, bio);
  res.json({ message: 'User updated' });
};

export const deleteUser = async (req, res, next) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: 'User deleted' });
};
