import { Request, Response } from "express";
import { connection } from "../database/connection";

export const getAllUsers = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400;

	try {
        const allUsers = await connection("labecommerce_users").select("*");
        if (!allUsers.length) {
            errorCode = 500;
            throw new Error ("Internal server error. Please, try again later.");
        };

        res.status(200).send(allUsers);
	} catch (error: any) {
			res.status(errorCode).send(error.message);
	}
};