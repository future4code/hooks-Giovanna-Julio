import { Request, Response } from "express";
import { ProductDatabase } from "../database/ProductsDatabase";
import { Product } from "../models/Product";
import { v4 as generateId } from 'uuid';


export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const name = req.body.name;
        const price = req.body.price;

        if (!name || !price) {
            throw new Error("Failed to provide name or price.")
        };

        const newProduct = new Product(generateId(), name, price);

        await ProductDatabase.setNewProduct(newProduct);
        
        res.status(201).send({ message: "Produto criado.", product: newProduct });
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
};