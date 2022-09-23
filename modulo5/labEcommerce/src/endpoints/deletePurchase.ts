import {Request, Response} from 'express';
import { connection } from '../database/connection';

export const deletePurchase = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400;

	try {
        const id = req.params.id;
        if(!id) throw new Error ("Please provide a purchase ID for deletion.")
        
        const verifyId = await connection("labecommerce_purchases")
            .select("*")
            .where({ id });
        if(!verifyId.length) {
            errorCode = 404;
            throw new Error ("ID doesn't match any purchases on our database.")
        }

        await connection("labecommerce_purchases")
            .where({ id })
            .delete();
            
        res.status(200).send("Purchases deleted successfully.");
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};