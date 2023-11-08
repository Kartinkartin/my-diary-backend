import { Router } from 'express';
import { createPost, findPost, getPosts } from "../controllers/posts";

const router = Router();
router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', findPost);

export default router;
