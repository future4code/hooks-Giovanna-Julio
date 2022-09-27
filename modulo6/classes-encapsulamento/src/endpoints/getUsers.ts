import { Request, Response } from "express"
import { db } from "../models/consts"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const result = await db.getUsers();
        
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}