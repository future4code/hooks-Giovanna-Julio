import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {
    public TABLE_NAME = "User_Arq"

    public async getAllUsers() {
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME).select();

            return result
        } catch (error) {
            throw new Error(error.sqlMessage);
        };
    }

    public async getById(id: string) {
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                            .select()
                            .where({ id });
            return result
        } catch (error) {
            throw new Error(error.sqlMessage);
        };
    }

    public async getUserByEmail(email: string) {
        try {
            const result = await UserDatabase.connection(this.TABLE_NAME)
                            .select()
                            .where({ email });
            return result
        } catch (error) {
            throw new Error(error.sqlMessage);
        };
    }

    public async insertUser(user: User) {
        try {
            await UserDatabase.connection(this.TABLE_NAME).insert(user);
        } catch (error) {
            throw new Error(error.sqlMessage);
        };
    }

    public async deleteUser(id: string) {
        try {
            await UserDatabase.connection(this.TABLE_NAME)
                .delete()
                .where({ id });
        } catch (error) {
            throw new Error(error.sqlMessage);
        };
    }
}