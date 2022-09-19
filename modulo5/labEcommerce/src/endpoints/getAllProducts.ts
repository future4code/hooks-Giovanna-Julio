import { Request, Response } from "express";
import { connection } from "../database/connection";

export const getAllProducts = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400;

	try {
        const allProducts = await connection("labecommerce_products").select("*");
        if (!allProducts.length) {
            errorCode = 500;
            throw new Error ("Internal server error. Please, try again later.");
        };

        res.status(200).send(allProducts);
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};