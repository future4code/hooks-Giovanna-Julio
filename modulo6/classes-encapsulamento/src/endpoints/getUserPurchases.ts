import { Request, Response } from "express";
import { PurchasesDatabase } from "../database/PurchasesDatabase";

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const id = req.params.id;

        const result = await new PurchasesDatabase().getPurchasesByUser(id);

        res.status(200).send({ purchases: result });
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    };
};