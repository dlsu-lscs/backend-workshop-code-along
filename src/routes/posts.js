import express from 'express';


import { createPost, getAllPosts, getPost, updatePost, deletePost } from '../controllers/postController.js';


const router = express.Router();

router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
