import express from 'express'

//Importing Controllers
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

//http://localhost:5000/posts
router.get('/', getPosts)
router.post('/', createPost)

export default router;