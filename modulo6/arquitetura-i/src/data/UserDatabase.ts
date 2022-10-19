import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {
    public TABLE_NAME = "User_Arq"

    public async getAllUsers() {
        const result = await UserDatabase.connection(this.TABLE_NAME)
            .select();
        return result
    }

    public async getById(id: string) {
        const result = await UserDatabase.connection(this.TABLE_NAME)
            .select()
            .where({ id });
        return result
    }

    public async getUserByEmail(email: string) {
        const result = await UserDatabase.connection(this.TABLE_NAME)
            .select()
            .where({ email });
        return result
    }

    public async insertUser(user: User) {
        await UserDatabase.connection(this.TABLE_NAME)
            .insert(user);
    }

    public async deleteUser(id: string) {
        await UserDatabase.connection(this.TABLE_NAME)
            .delete()
            .where({ id })
    }
}