import { BaseDatabase } from "./BaseDatabase";


class Migrations extends BaseDatabase {
    TABLE_NAME: 'User_Arq'

    public async createTables() {
        await Migrations.connection.schema.createTable(this.TABLE_NAME, function (table) {
            table.string('id', 255).primary;
            table.string('name', 255).notNullable;
            table.string('email', 255).unique;
            table.string('password', 255).notNullable;
        });

    }
};

const createTables = async () => {
    try {
        await new Migrations().createTables();

        console.log('Table created!');
    } catch (error) {
        console.log("Failed to create table.");
        console.log(error.sqlMessage);
    };
};

createTables().finally(() => process.exit)