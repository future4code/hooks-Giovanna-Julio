import { UserDatabase } from '../data/UserDatabase';
import { CustomError } from '../error/CustomError';
import { DuplicateEntry } from '../error/DuplicateEntry';
import { InvalidInput } from '../error/InvalidInput';
import { Friendship } from '../models/Friendship';
import { FriendshipDTO } from '../models/FriendshipDTO';
import { User } from '../models/User';
import { UserDTO } from '../models/UserDTO';
import { generateString } from './services/generateString';

export class UserBusiness {
    private userDatabase = new UserDatabase();

    public async insertUser(input: UserDTO) {
        try {
            if (!input.name || !input.email || !input.password) {
                throw new InvalidInput();
            }

            if (!input.email.includes('@')) {
                throw new InvalidInput();
            }

            const verifyEmail = await this.userDatabase.getByEmail(input.email);
            if (verifyEmail.length) {
                throw new DuplicateEntry();
            }

            const newUser = new User(
                generateString(),
                input.name,
                input.email,
                input.password
            );

            await this.userDatabase.insertUser(newUser);
        } catch (error) {
            throw new CustomError(
                error.statusCode,
                error.message || error.sqlMessage
            );
        }
    }
}
