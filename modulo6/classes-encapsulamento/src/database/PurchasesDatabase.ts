import { Purchase } from "../models/Purchase";
import { BaseDatabase } from "./BaseDatabase";
import { ProductDatabase } from "./ProductsDatabase";
import { UserDatabase } from "./UserDatabase";


export class PurchasesDatabase extends BaseDatabase {
    static TABLE_PURCHASES = 'Labe_Purchases';

    static setNewPurchase = async(buy: Purchase): Promise<void> => {
        await BaseDatabase.connection(PurchasesDatabase.TABLE_PURCHASES).insert(buy);
    };

    public getPurchasesByUser = async (id: string): Promise <Purchase[]> => {
        const result = await BaseDatabase.connection(`${PurchasesDatabase.TABLE_PURCHASES} AS pur`)
                .select(
                    `pur.user_id`,
                    `u.email`,
                    "p.name",
                    "p.id",
                    "p.price",
                    `pur.quantity`,
                    `pur.total_price`
                )
                .join(`${UserDatabase.TABLE_USERS} AS u`, `pur.user_id`, "=", `u.id`)
                .join(`${ProductDatabase.TABLE_PRODUCTS} AS p`, "pur.product_id", "=", "p.id")
                .where({user_id: id});
            
        return result
    };
};