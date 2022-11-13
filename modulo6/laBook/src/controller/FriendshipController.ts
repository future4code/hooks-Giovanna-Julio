import { FriendshipDTO } from '../models/FriendshipDTO';
import { Request, Response } from 'express';
import { FriendshipBusiness } from '../business/FriendshipBusiness';

export class FriendshipController {
    public async insertFriendship(req: Request, res: Response) {
        try {
            const { requester, target } = req.body;

            const input: FriendshipDTO = {
                user1_id: requester,
                user2_id: target,
            };

            await new FriendshipBusiness().insertFriendship(input);

            res.status(201).send({
                message: 'Congratulations on your new friendship!',
            });
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage);
        }
    }

    public async deleteFriendship(req: Request, res: Response) {
        try {
            const { friendshipId } = req.query;

            const input: string = friendshipId as string;

            await new FriendshipBusiness().deleteFriendship(input);

            res.status(201).send({ message: 'Friendship gone :(' });
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage);
        }
    }
}
