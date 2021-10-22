import express from 'express';

// importing controller for router
import { createPost } from '../controller/post-controller';

const router = express.Router();

router.post('/create', createPost);
    //save Data to MongoDB

// export default router;