import { FriendshipDatabase } from '../data/FriendshipDatabase';
import { UserDatabase } from '../data/UserDatabase';
import { CustomError } from '../error/CustomError';
import { DuplicateEntry } from '../error/DuplicateEntry';
import { InvalidInput } from '../error/InvalidInput';
import { Friendship } from '../models/Friendship';
import { FriendshipDTO } from '../models/FriendshipDTO';
import { generateString } from './services/generateString';

export class FriendshipBusiness {
    private friendshipDatabase = new FriendshipDatabase();
    private userDatabase = new UserDatabase();

    public async insertFriendship(input: FriendshipDTO) {
        try {
            if (!input.user1_id || !input.user2_id) {
                throw new InvalidInput();
            }

            if (input.user1_id === input.user2_id) {
                throw new DuplicateEntry();
            }

            const verifyIds =
                (await this.userDatabase.getById(input.user1_id)) &&
                this.userDatabase.getById(input.user2_id);

            if (verifyIds) {
                throw new InvalidInput();
            }

            const newFriendship = new Friendship(
                generateString(),
                input.user1_id,
                input.user2_id
            );

            await this.friendshipDatabase.insertFriendship(newFriendship);
        } catch (error) {
            throw new CustomError(
                error.statusCode,
                error.message || error.sqlMessage
            );
        }
    }

    public async deleteFriendship(input: string) {
        try {
            if (!input) {
                throw new InvalidInput();
            }

            const verifyFriendship =
                await this.friendshipDatabase.getFriendshipById(input);

            if (!verifyFriendship.length) {
                throw new InvalidInput();
            }

            await this.friendshipDatabase.deleteFriendship(input);
        } catch (error) {
            throw new CustomError(
                error.statusCode,
                error.message || error.sqlMessage
            );
        }
    }
}
