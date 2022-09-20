import { Request, Response } from "express";
import { connection } from "../database/connection";

export const getAllProducts = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400;

	try {
        const order = req.query.order as string;
        const search = req.query.search as string;
        
        let products;
        
        if (order && order !== "asc" && order !== "desc") throw new Error ("Order must be ascending or descending ('asc'/'desc').");

        if (!search) {

            if (!order) {

                products = await connection("labecommerce_products")
                    .select("*");
                    
                if (!products.length) {
                    errorCode = 404;
                    throw new Error ("Internal server error. Please, try again later.");
                };
                res.status(200).send(products);

            } else if (order) {

                products = await connection("labecommerce_products")
                    .select("*")
                    .orderBy("name", `${order}`);

                if (!products.length) {
                    errorCode = 500;
                    throw new Error ("Internal server error. Please, try again later.");
                };
                res.status(200).send(products);

            }

        } else if (search) {

            if (!order) {

                products = await connection("labecommerce_products")
                    .select("*")
                    .where({name: search})
                    .orWhere('name', 'LIKE', `%${search}%`);

                if (!products.length) {
                    errorCode = 404;
                    throw new Error ("No products found under this search.");
                };
                res.status(200).send(products);

            } else if (order) {

                products = await connection("labecommerce_products")
                    .select("*")
                    .where({name: search})
                    .orWhere('name', 'LIKE', `%${search}%`)
                    .orderBy("name", `${order}`);

                if (!products.length) {
                    errorCode = 500;
                    throw new Error ("No products found under this search.");
                };
                res.status(200).send(products);

            }
        }
	} catch (error: any) {
		res.status(errorCode).send(error.message);
	}
};