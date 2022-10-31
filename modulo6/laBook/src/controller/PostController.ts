import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostDTO } from "../models/PostDTO";
import { authenticationData } from "../models/types";


export class PostController {
    private postBusiness = new PostBusiness()
    public async insertPost(req: Request, res: Response) {
        try {
        
            const { photo, description, type, authorId } = req.body
        
            const input: PostDTO = {
                photo,
                description,
                type, 
                authorId
            }

            await this.postBusiness.insertPost(input)
        
            res.status(201).send({ message: 'Post created!' })
        
        } catch (error:any) {
            res.status(400).send(error.message || error.sqlMessage);
        }
    }

    public async getById(req: Request, res: Response){
        try {
            const { id } = req.params
            
            const input: authenticationData = { id }

            const result = await this.postBusiness.getById(input)
        
            res.status(200).send({ result })
     
        } catch (error:any) {
            res.status(400).send(error.message || error.sqlMessage);
        }
     }
}