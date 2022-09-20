import { Request, Response } from "express";
import { connection } from "../database/connection";
import { purchaseReg } from "../types";
import {v4 as generateId} from 'uuid';

export const postPurchaseRegistration = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400

	try {
        const {user_id, product_id, quantity} = req.body;
        if (!user_id || !product_id || !quantity || quantity <= 0) throw new Error ("You must inform user and product id, plus quantity.");

        const verifyUser = await connection("labecommerce_users")
            .select("*")
            .where({ id: user_id });
        if (!verifyUser.length) {
            errorCode = 404;
            throw new Error ("User not found.");
        };

        const verifyProduct = await connection("labecommerce_products")
            .select("*")
            .where({ id: product_id });
        if (!verifyProduct.length) {
            errorCode = 404;
            throw new Error ("Product not found.");
        };

        const total_price = verifyProduct[0].price * quantity

        const newPurchase: purchaseReg = {
            id: generateId(),
            user_id,
            product_id,
            quantity,
            total_price,
        };

        await connection("labecommerce_purchases")
            .insert(newPurchase);
        
        res.status(201).send("Purchase registered successfully.");
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};

// 