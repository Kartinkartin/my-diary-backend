import { Router } from 'express';
import { createPost, findPost, getPosts, getPostsSortedBack } from "../controllers/posts";

const router = Router();
router.get('/new-first', getPosts);
router.get('/old-first', getPostsSortedBack);
router.post('/', createPost);
// router.get('/:id', findPost);

export default router;
