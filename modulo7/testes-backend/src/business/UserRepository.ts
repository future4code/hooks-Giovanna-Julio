import { AuthType } from "../models/DTOs";
import { IUser } from "../models/Types";

export interface UserRepository{
	getUserById(input: AuthType): Promise<IUser>; 
}