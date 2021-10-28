import express from 'express';

// importing controller for router
import { createPost, getAllPosts, getPost, updatePost, deletePost } from '../controller/post-controller.js';

const router = express.Router();

router.post('/create', createPost);
    //save Data to MongoDB

router.get('/posts', getAllPosts);
router.get('/post/:id', getPost);

router.post('/update/:id', updatePost);

router.delete('/delete/:id', deletePost);

export default router;