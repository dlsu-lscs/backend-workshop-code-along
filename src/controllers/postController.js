import * as postService from "../services/postService.js"

export const createPost = async (req, res, next) => {
  const { user_id, body } = req.body;
  const { result } = await postService.createPost(user_id, body);
  res.status(201).json(result);
};

export const getPost = async (req, res, next) => {
  const { result } = await userService.getPostById(req.params.id);
  res.json(result);
};

export const getAllPosts = async (req, res, next) => {
  const { result } = await postService.getAllPosts();
  res.json(result);
};

export const updatePost = async (req, res, next) => {
  const { user_id, body } = req.body;
  await postService.updatePost(req.params.id, user_id, body);
  res.json({ message: 'Post updated' });
};

export const deletePost = async (req, res, next) => {
  await postService.deletePost(req.params.id);
  res.json({ message: 'Post deleted' });
};
