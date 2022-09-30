import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {
    static TABLE_USERS = 'Labe_Users';


    public getAllUsers = async(): Promise<User[]> => {
        return await BaseDatabase.connection(UserDatabase.TABLE_USERS).select();
    };

    public getUserById = async(id: string): Promise<User> => {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select()
            .where({id});

        return result[0];
    };

    public static setNewUser = async(user: User): Promise<void> => {
        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(user);
    };
};