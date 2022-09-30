import { Request, Response } from "express";
import { connection } from "../database/connection";

export const getUsersByPage = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400
	try {
		const page = Number(req.query.page)
		if (!page) {
			errorCode = 411
			throw new Error ("Please inform the number of the desired page.")
		}

		const displayPage =  await findUsers(page);
		if(!displayPage.length){
		   errorCode = 404
		   throw new Error("No users found on this page.")
		}
  
		res.status(200).send(displayPage)	
	} catch (error: any) {
		res.status(errorCode).send(error.message)

	};
};

const findUsers = async(page: number):Promise<any> => {
	const result = await connection("Filtros_Ordenacao_Paginacao")
		.select("*")
		.limit(5)
		.offset(5 * (page - 1))
	  
	return result
 };