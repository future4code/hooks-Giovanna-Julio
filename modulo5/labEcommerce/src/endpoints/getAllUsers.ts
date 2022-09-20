import { Request, Response } from "express";
import { connection } from "../database/connection";

export const getAllUsers = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400;

	try {
        let allUsers = await connection("labecommerce_users").select("*");
        if (!allUsers.length) {
            errorCode = 500;
            throw new Error ("Internal server error. Please, try again later.");
        };

        const userWithPurchases = allUsers.map((user) => {
            const purchases = getPurchases(user.id);
            const newUser = {...user, purchases: purchases};
            return newUser;
        })
        if (!userWithPurchases.length) {
            errorCode = 500;
            throw new Error ("Internal server error. Please, try again later.");
        };

        res.status(200).send(userWithPurchases);
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};

const getPurchases = async (id: string) => {
    const result = await connection("labecommerce_purchases")
        .select("*")
        .where({user_id: id});
    
    return [result]
};