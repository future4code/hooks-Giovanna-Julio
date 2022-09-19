import { Request, Response } from "express";
import { connection } from "../database/connection";

export const getOrderedUsers = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400
	try {
		const parameter = req.params.parameter;
		let userDisplay;

		if(!parameter) {
			userDisplay = await orderUsers("email");

			res.status(200).send(userDisplay);
		};

		if (parameter) {
			userDisplay = await orderUsers(parameter);
			if(!userDisplay.length){
				errorCode = 404
				throw new Error("No users found under provided name or type.")
			 };

			res.status(200).send(userDisplay);
		};	
	} catch (error: any) {
		res.status(errorCode).send(error.message)
	};
};

const orderUsers = async(parameter: string):Promise<any> => {
	const result = await connection("Filtros_Ordenacao_Paginacao")
		.select("*")
		.orderBy(`${parameter}`, "asc");
	  
	return result
 };