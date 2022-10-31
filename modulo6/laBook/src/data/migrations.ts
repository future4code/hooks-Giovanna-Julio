import { timeStamp } from "console";
import { BaseDatabase } from "./BaseDatabase";


class Migrations extends BaseDatabase {

    public async createTables() {
        await Migrations.connection.schema.createTable('labook_users', function (table) {
            table.string('id', 255).primary;
            table.string('name', 255).notNullable;
            table.string('email', 255).unique;
            table.string('password', 255).notNullable;
        });

        await Migrations.connection.schema.createTable('labook_posts', function (table) {
            table.string('id', 255).primary;
            table.string('photo', 255).notNullable;
            table.string('description', 255).notNullable;
            table.enum('type', ['normal', 'event']). defaultTo('normal')
            table.timestamp('created_at').defaultTo(new Date)
            table.string('author_id', 255).references('id').inTable('labook_users');
        });

    }
    
};

const createTables = async () => {
    try {
        await new Migrations().createTables();

        console.log('Tables created!');
    } catch (error) {
        console.log("Failed to create tables.");
        console.log(error.sqlMessage);
    };
};

createTables().finally(() => process.exit)