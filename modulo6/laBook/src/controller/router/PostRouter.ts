import express from 'express';
import { PostController } from '../PostController';

export const postRouter = express.Router();

const postController = new PostController();

postRouter.post('/user/:id', postController.getById);
postRouter.get('/:id', postController.getFriendsPosts);
postRouter.post('/create', postController.insertPost);
