import { Request, Response } from "express";
import { connection } from "../database/connection";
import { productReg } from "../types";
import {v4 as generateId} from 'uuid';

export const postProductRegistration = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400

	try {
        const {name, price, image_url} = req.body;
        if (!name || !price || !image_url) throw new Error ("You must inform name, price and image link.");

        const verifyName = await connection("labecommerce_products")
            .select("*")
            .where({ name });
        if (verifyName.length) {
            errorCode = 406;
            throw new Error ("A product is already registered under this name.");
        };

        const newProduct: productReg = {
            id: generateId(),
            name,
            price,
            image_url
        };

        await connection("labecommerce_products")
            .insert(newProduct);
        
        res.status(201).send("Product registered successfully.");
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};