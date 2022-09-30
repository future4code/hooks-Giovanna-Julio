import { Request, Response } from "express";
import { v4 as generateId } from 'uuid';
import { Purchase } from "../models/Purchase";
import { UserDatabase } from "../database/UserDatabase";
import { ProductDatabase } from "../database/ProductsDatabase";
import { PurchasesDatabase } from "../database/PurchasesDatabase";

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const userId = req.body.userId;
        const productId = req.body.productId;
        const quantity = req.body.quantity;

        if (!userId || !productId || !quantity) {
            throw new Error("Failed to provide IDs or quantity..")
        };

        const findUser = await new UserDatabase().getUserById(userId);
        if (!findUser) {
            errorCode = 404
            throw new Error("User not found.")
        };

        const findProduct = await new ProductDatabase().getProductById(productId);
        if (!findProduct) {
            errorCode = 404
            throw new Error("Product not found.")
        };
        
        const totalPrice = findProduct.getPrice() * quantity ;
        const newPurchase = new Purchase(generateId(), userId, productId, quantity, totalPrice);

        await PurchasesDatabase.setNewPurchase(newPurchase);

        res.status(201).send({ message: "Compra registrada", purchase: newPurchase });
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    };
};