import { Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";


export class ProductDatabase extends BaseDatabase {
    static TABLE_PRODUCTS = 'Labe_Products';

    public getAllProducts = async(): Promise <Product[]> => {
        return await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS).select();
    };

    public getProductById = async(id:string): Promise<Product> => {
        const result = await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .where({id});

        return result[0];
    };
    
    public static setNewProduct = async(product: Product): Promise<void> => {
        await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS).insert(product);
    };
};