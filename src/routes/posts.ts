import { Router } from 'express';
import { createPost, getPosts, getPostsSortedBack, markPost } from "../controllers/posts";

const router = Router();
router.get('/', getPosts);
router.get('/new-first', getPosts);
router.get('/old-first', getPostsSortedBack);
router.post('/', createPost);
router.patch('/:id', markPost);

export default router;
