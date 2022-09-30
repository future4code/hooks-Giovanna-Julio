import connection from "./connection";

const criarTabelaProdutos = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS KnexUsers (
            id BIGINT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email DECIMAL(8, 2) NOT NULL,
        `)

        console.log("Tabela KnexUsers criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela KnexUsers.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaProdutos() {
    try {
        await connection.raw(`
            INSERT INTO KnexUsers (id, nome, email)
            VALUES 
            (1, "Gio", "gio@mail.com"),
            (2, "Bruno", "bru@mail.com"),
            (3, "Giu", "giu@mail.com"),
            (4, "Lucila", "lu@mail.com"),
            (5, "Ney", "ney@mail.com");
        `)
        
        console.log("Tabela KnexUsers populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular tabela KnexUsers.")
        console.log(error.sqlMessage)
    }
}

criarTabelaProdutos()
.then(() => popularTabelaProdutos())
.finally(() => process.exit())