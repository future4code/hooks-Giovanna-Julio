import { Request, Response } from "express";
import { connection } from "../database/connection";

export const getUsersByType = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400
	try {
		const type = req.params.type
		const verifyType = await findUser(type as string)
		
		if(!verifyType.length){
		   errorCode = 404
		   throw new Error("User type not fount.")
		}
  
		res.status(200).send(verifyType)	
	} catch (error: any) {
		res.status(errorCode).send(error.message)

	};
};

const findUser = async(type: string):Promise<any> => {
	const result = await connection("Filtros_Ordenacao_Paginacao")
		.select("id", "name", "email", "type")
		.where({type: type});
	  
	return result
 };