import { UserDatabase } from "../data/UserDatabase";
import { User } from "../models/User";
import { generateString } from "../services/generateString";


export class UserBusiness {
    private userDatabase = new UserDatabase();
    private errorCode: number;

    public async getAllUsers () {
        try {
            const users = await this.userDatabase.getAllUsers();

            if (!users.length) {
                this.errorCode = 500;
                throw new Error ('Something went wrong...');
            };

            return users

        } catch (error) {
            throw new Error(error.message)
        }
    }

    public async insertUser(input: any) {
        try {
            const { name, email, password } = input;

            if (!name || !email || !password) {
                throw new Error("Missing required information.");
            };

            const findEmail = await this.userDatabase.getUserByEmail(email);

            if (findEmail) {
                this.errorCode = 409;
                throw new Error("E-mail already registered in database.");
            };

            const newUser = new User(
                generateString(),
                name,
                email,
                password
            );

            await this.userDatabase.insertUser(newUser);
        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public async deleteUser (id: string) {
        try {
            const verifyUser = await this.userDatabase.getById(id);

            if (!verifyUser.length) {
                this.errorCode = 404;
                throw new Error ('No users found under the provided ID.');
            };

            await this.userDatabase.deleteUser(id);
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
