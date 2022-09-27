import knex from "knex";
import { Purchase } from "../models/Purchase";
import { PurchaseReceipt } from "../models/PurchaseReceipt";
import { User } from "../models/User";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "./tableNames";
import dotenv from 'dotenv';

dotenv.config();

export class Database {
    private connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            multipleStatements: true
        }
    });
    
    public getUsers = async (): Promise <User[]> => {
            return await this.connection(TABLE_USERS).select();
    }
    
    // public getPurchases = async (id: string): Promise <PurchaseReceipt[]> =>{
    //         const result = await this.connection(`${TABLE_PURCHASES} AS pur`)
    //             .select(
    //                 `pur.user_id`,
    //                 `u.email`,
    //                 "p.name",
    //                 "p.id",
    //                 "p.price",
    //                 `pur.quantity`,
    //                 `pur.total_price`
    //             )
    //             .join(`${TABLE_USERS} AS u`, `pur.user_id`, "=", `u.id`)
    //             .join(`${TABLE_PRODUCTS} AS p`, "pur.product_id", "=", "p.id")
    //             .where({user_id: id})
            
    //         return result
    // }
    

    
    
     
    // async getProducts(){

    // }
    // async setNewUser(){

    // }
    // async setNewPurchase(){

    // }
    // async setNewProduct(){

    // }
};

// const newwww = new Database()


// async function hey () {
//     const resss = await newwww.getPurchases("102")
//    console.log(resss)
// }
// hey()


