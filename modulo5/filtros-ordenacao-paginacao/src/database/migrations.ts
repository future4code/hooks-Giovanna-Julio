import { connection } from "./connection";

const createUsersTable = async () => {
    try {
        await connection.raw(`
            CREATE TABLE Filtros_Ordenacao_Paginacao (
                id INT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                type VARCHAR(255) NOT NULL
            );
        `)

        console.log("Users table successfully created.")
    } catch (error) {
        console.log("Failed to create Users table.")
        console.log(error.sqlMessage)
    }
};

const populateUsersTable = async () => {
    try {
        await connection.raw(`
            INSERT INTO Filtros_Ordenacao_Paginacao ('id','nome', 'email', "type") 
            VALUES 
            (1,'Soter','soter@labenu','Teacher'),
            (2,'João','joao@labenu','Teacher'),
            (3,'Paula','paula@labenu','Teacher'),
            (4,'Amanda','amanda@labenu','Teacher'),
            (5,'Darvas','darvas@labenu','Teacher'),
            (6,'Severo','severo@labenu','Teacher'),
            (7,'Caio','caio@labenu','Teacher'),
            (8,'Chijo','chijo@labenu','Teacher'),
            (9,'Lais','lais@labenu','Teacher'),
            (10,'Bruno','bruno@labenu','Teacher'),
            (11,'Luciano','luciano@labenu','Operations'),
            (12,'Miau','miau@labenu','Operations'),
            (13,'Sekine','sekine@labenu','Operations'),
            (14,'Nathalia','nathalia@labenu','Operations'),
            (15,'Amanda','amandaop@labenu','Operations'),
            (16,'Rebeca','rebeca@labenu','Operations'),
            (17,'Jean','jean@labenu','Operations'),
            (18,'Vitória','vitoria@labenu','Operations'),
            (19,'Fernanda','fernanda@labenu','Operations'),
            (20,'Tainah','tainah@labenu','Operations'),
            (21,'Aline','aline@labenu','CX'),
            (22,'Nathalia','nathaliacx@labenu','CX'),
            (23,'Layla','layla@labenu','CX'),
            (24,'Jonathan','jonathan@labenu','CX'),
            (25,'Maju','maju@labenu','CX');
        `)
    } catch (error) {
        console.log("Failed to populate Users table.")
        console.log(error.sqlMessage)
    }
};

createUsersTable()
    .then(()=>{populateUsersTable()})
    .finally(()=> process.exit());