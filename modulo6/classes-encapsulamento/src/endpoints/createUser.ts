import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";
import { v4 as generateId } from 'uuid';
import { User } from "../models/User";

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password) {
            throw new Error("Failed to provide e-mail address or password.")
        };

        const newUser = new User(generateId(), email, password);

        await connection(TABLE_USERS).insert(newUser);
        
        res.status(201).send({ message: "Usuário criado", user: newUser });
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
};