import { Request, Response } from "express";
import { connection } from "../database/connection";

export const getUsersByName = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400
	try {
		const user = req.query.user
		const verifyUser = await findUsers(user as string)
		
		if(!verifyUser.length){
		   errorCode = 404
		   throw new Error("No users found.")
		}
  
		res.status(200).send(verifyUser)	
	} catch (error: any) {
		res.status(errorCode).send(error.message)

	};
};

const findUsers = async(username: string):Promise<any> => {
	const result = await connection("Filtros_Ordenacao_Paginacao")
		.select("id", "name", "email", "type")
		.whereLike({name: username});
	  
	return result
 };
