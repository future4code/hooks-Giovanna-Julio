import {Request, Response} from 'express';
import { connection } from '../database/connection';

export const deleteProduct = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400;

	try {
        const id = req.params.id;
        if(!id) throw new Error ("Please provide a product ID for deletion.")
        
        const verifyId = await connection("labecommerce_products")
            .select("*")
            .where({ id });
        if(!verifyId.length) {
            errorCode = 404;
            throw new Error ("ID doesn't match any products on our database.")
        }

        const checkPurchases = await connection("labecommerce_purchases").select("*").where({product_id: id});

        if (checkPurchases.length) {
            await connection("labecommerce_purchases")
                .where({product_id: id})
                .delete()
                .then(async()=> await connection("labecommerce_products").where({id}).delete())
     
            res.status(200).send("Product and purchases related deleted successfully.");
        } else if (!checkPurchases.length) {
            await connection("labecommerce_products").where({id}).delete();

            res.status(200).send("Product deleted successfully.");
        }
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};