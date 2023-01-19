import express from 'express';
import { UserController } from '../UserController';

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post('/signup', userController.signUp);
userRouter.post('/login', userController.login);
userRouter.get('/user/profile', userController.getUserOwnProfile);
userRouter.get('/user/:id', userController.getAnotherUserProfile);
