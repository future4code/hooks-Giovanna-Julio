import { Request, Response } from "express";
import { connection } from "../database/connection";

export const getUsersMasterFilter = async (req: Request, res: Response): Promise<void>  => {
	let errorCode = 400
	try {
		const user = req.query.user;
		const type = req.params.type;
		const order = req.params.parameter;
		const page = Number(req.query.page);

		let display;

		if (!user && !type && order && page) {
			display = await noFilterFilter(order, "asc", page)

			if (!display.length) {
				errorCode = 404
				throw new Error ("No results under desired specifications.")
			}

			res.status(200).send(display)
		};

		if (!order && user && type && page) {
			display = await masterFilter(user as string, type, "name", "desc", page)

			if (!display.length) {
				errorCode = 404
				throw new Error ("No results under desired specifications.")
			}

			res.status(200).send(display)
		}

		if (!page && order && user && type) {
			display = await masterFilter(user as string, type, order, "asc", 1)

			if (!display.length) {
				errorCode = 404
				throw new Error ("No results under desired specifications.")
			}

			res.status(200).send(display)
		}


		if (user && type && order && page) {
			display = await masterFilter(user as string, type, order, "asc", page)

			if (!display.length) {
				errorCode = 404
				throw new Error ("No results under desired specifications.")
			}

			res.status(200).send(display)
		}	
	} catch (error: any) {
		res.status(errorCode).send(error.message)

	};
};


 const masterFilter = async (
	name: string, 
	type: string, 
	parameter: string, 
	order: string, 
	page: number
): Promise<any> => {
	const result = await connection("Filtros_Ordenacao_Paginacao")
		.select("*")
		.where({name: name})
		.where({type: type})
		.orderBy(`${parameter}`, `${order}`)
		.limit(5)
		.offset(5 * (page - 1));

	return result;
};

const noFilterFilter = async (
	parameter: string, 
	order: string, 
	page: number
): Promise<any> => {
	const result = await connection("Filtros_Ordenacao_Paginacao")
		.select("*")
		.orderBy(`${parameter}`, `${order}`)
		.limit(5)
		.offset(5 * (page - 1));

	return result;
 };

