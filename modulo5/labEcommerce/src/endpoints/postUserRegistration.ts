import { Request, Response } from "express";
import { connection } from "../database/connection";
import { userReg } from "../types";
import {v4 as generateId} from 'uuid';

export const postUserRegistration = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400
	try {
        const {name, email, password} = req.body;
        if (!name || !email || !password) throw new Error ("You must inform name, e-mail and password.");
        if (!password.includes("@")) throw new Error ("Please provide a valid e-mail address.");

        const verifyEmail = await connection("labecommerce_users")
            .select("*")
            .where({ email });
        if (verifyEmail.length) {
            errorCode = 406;
            throw new Error ("E-mail already registered.");
        };

        const newUser: userReg = {
            id: generateId(),
            name,
            email,
            password
        };

        await connection("labecommerce_users")
            .insert(newUser);
        
        res.status(201).send("User registered successfully.");
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};