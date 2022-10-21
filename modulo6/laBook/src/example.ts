import { Request, Response } from "express";

export const endpointName = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {

    } catch (error: any) {
        res.status(errorCode).send({message: error.message || error.sqlMessage});
    };
};