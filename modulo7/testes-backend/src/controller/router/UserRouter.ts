import express from 'express';
import { UserController } from '../UserController';

export const userRouter = express.Router();

const userController = new UserController();

userRouter.get('/profile/:id', userController.getUserById);
