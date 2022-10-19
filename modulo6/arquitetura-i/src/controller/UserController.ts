import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    private userBusiness = new UserBusiness()
    private errorCode: number;

    public async getAllUsers(req: Request, res: Response) {
        try {
            const users = await this.userBusiness.getAllUsers();

            res.status(20).send({ users });
        } catch (error) {
            res.status(this.errorCode).send({ message: error.message || error.sqlMessage });
        }
    }


    public async insertUser(req: Request, res: Response) {
        this.errorCode = 400;

        try {
            const { name, email, password } = req.body;

            const input = {
                name,
                email,
                password
            };

            await this.userBusiness.insertUser(input);

            res.status(201).send({ message: 'User successfully created.' });
        } catch (error: any) {
            res.status(this.errorCode).send({ message: error.message || error.sqlMessage });
        };
    }

    public async deleteUser (req: Request, res: Response) {
        this.errorCode = 400;

        try {
            const id = req.params.id;

            await this.userBusiness.deleteUser(id)

            res.status(202).send({ message: 'User successfully deleted.' });
        } catch (error) {
            res.status(this.errorCode).send({ message: error.message || error.sqlMessage });
        };
    }
};