import express from 'express';
import { FriendshipController } from '../FriendshipController';

export const friendshipRouter = express.Router();

const friendshipController = new FriendshipController();

friendshipRouter.post('/add', friendshipController.insertFriendship);
friendshipRouter.delete('/', friendshipController.deleteFriendship);
