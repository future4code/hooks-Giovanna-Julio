import { UserRepository } from "../../src/business/UserRepository";
import { AuthType } from "../../src/models/DTOs";
import { IUser } from "../../src/models/Types";
import { userMock } from "./UserMock";


export class UserBusinessMock implements UserRepository{
	public async getUserById(input: AuthType) : Promise<IUser>{
        return input === "id" ? userMock:undefined
    }
}