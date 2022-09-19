import { Request, Response } from "express";
import { connection } from "../database/connection";

export const getAllPurchases = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400;

	try {
        const user_id = req.params.userId;
    
        const allPurchases = await connection("labecommerce_purchases")
            .select("*")
            .where({ user_id });
        if (!allPurchases.length) {
            errorCode = 404;
            throw new Error ("No purchases found at this time.");
        };

        res.status(200).send(allPurchases);
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};