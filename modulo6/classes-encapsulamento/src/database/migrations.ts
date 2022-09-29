import connection from "./connection"
import { products, purchases, users } from "./data"

const createTables = async () => {
    await connection.raw(`
        DROP TABLE IF EXISTS Labe_Purchases, Labe_Products, Labe_Users;

        CREATE TABLE IF NOT EXISTS Labe_Users(
            id VARCHAR(255) PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Labe_Products(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(6,2) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Labe_Purchases(
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            product_id VARCHAR(255) NOT NULL,
            quantity INT NOT NULL,
            total_price DECIMAL(6,2) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES Labe_Users(id),
            FOREIGN KEY (product_id) REFERENCES Labe_Products(id)
        );
    `)
    .then(() => {
        console.log(`Tables created successfully!`)
        insertData()
    })
    .catch((error: any) => printError(error))
}

const insertData = async () => {
    try {
        await connection('Labe_Users')
            .insert(users)
            .then(() => console.log(`Labe_Users populated!`))
            .catch((error: any) => printError(error))

        await connection('Labe_Products')
            .insert(products)
            .then(() => console.log(`Labe_Products populated!`))
            .catch((error: any) => printError(error))

        await connection('Labe_Purchases')
            .insert(purchases)
            .then(() => console.log(`Labe_Purchases populated!`))
            .catch((error: any) => printError(error))

    } catch (error: any) {
        console.log(error.sqlMessage || error.message)
    } finally {
        console.log("Ending connection!")

        return connection.destroy()
    }
}

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
}

createTables()