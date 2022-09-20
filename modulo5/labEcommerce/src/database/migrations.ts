import { connection } from "./connection";

const createTables = async (): Promise<void> => {
    
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS labecommerce_users (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS labecommerce_products (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) UNIQUE NOT NULL,
                price DECIMAL(6,4) NOT NULL,
                image_url VARCHAR(255) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS labecommerce_purchases (
                id VARCHAR(255) PRIMARY KEY,
                user_id VARCHAR(255) NOT NULL,
                product_id VARCHAR(255) NOT NULL,
                quantity INT NOT NULL,
                total_price DECIMAL(6,4) NOT NULL,
                FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
                FOREIGN KEY (product_id) REFERENCES labecommerce_products(id)
            );
        `) 

        console.log("Tables successfully created.")
    } catch (error) {
        console.log("Failed to create tables.")
        console.log(error.sqlMessage)
    }
};

createTables()
// .then(()=>{populateTables()})
.finally(()=> process.exit());