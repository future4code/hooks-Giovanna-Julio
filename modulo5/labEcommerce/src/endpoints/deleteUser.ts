import {Request, Response} from 'express';
import { connection } from '../database/connection';

export const deleteUser = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400;

	try {
        const id = req.params.id;
        if(!id) throw new Error ("Please provide a user ID for deletion.")
        
        const verifyId = await connection("labecommerce_users")
            .select("*")
            .where({ id });
        if(!verifyId.length) {
            errorCode = 404;
            throw new Error ("ID doesn't match any users on our database.")
        }

        const checkPurchases = await connection("labecommerce_purchases")
            .select("*")
            .where({user_id: id});

        if (checkPurchases.length) {
            await connection("labecommerce_purchases")
                .where({user_id: id})
                .delete()
                .then(async() => await connection("labecommerce_users").where({ id }).delete());

            res.status(200).send("User and purchases related deleted successfully.");
        } else if (!checkPurchases.length) {
            await connection("labecommerce_users").where({id}).delete();

            res.status(200).send("User deleted successfully.");
        }
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};