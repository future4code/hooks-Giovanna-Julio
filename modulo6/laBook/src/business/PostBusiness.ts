import { PostDatabase } from "../data/PostDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidInput } from "../error/InvalidInput";
import { Post } from "../models/Post";
import { PostDTO } from "../models/PostDTO";
import { authenticationData } from "../models/types";
import { generateString } from "./services/generateString";

export class PostBusiness {
    private postDatabase = new PostDatabase();

    public async insertPost(input: PostDTO){
        try {
            if (!input.photo || !input.description || !input.type || !input.authorId) {
                throw new InvalidInput()
             }

            const verifyUser = await new UserDatabase().getById(input.authorId)
            if (!verifyUser.length) {
				throw new InvalidInput()
			}

            const newPost = new Post(
				generateString(),
				input.photo,
                input.description, 
                input.type,
                new Date, 
                input.authorId
			)

			await this.postDatabase.insertPost(newPost);

        } catch (error) {
            throw new CustomError(error.statusCode, error.message || error.sqlMessage);
        }
    }
    
    public async getById(input: authenticationData){
        try {
            if (!input.id) {
                throw new InvalidInput()
             }

            const verifyUser = await new UserDatabase().getById(input.id)
            if (!verifyUser.length) {
				throw new InvalidInput()
			}

            const result = await this.postDatabase.getById(input.id)

			return result
        } catch (error) {
            throw new CustomError(error.statusCode, error.message || error.sqlMessage);
        }
    }
}