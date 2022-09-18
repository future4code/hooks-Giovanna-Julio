import connection from './connection';

const createUsersTable = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS To_Do_Users (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                nickname VARCHAR (255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL
            )
        `)

        console.log("To Do Users table successfully created.")
    } catch (error) {
        console.log("Failed to create Users table.")
        console.log(error.sqlMessage)
    }
};

const createToDoListTable = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS To_Do_List (
                id VARCHAR(255) PRIMARY KEY,
                title VARCHAR(50) NOT NULL,
                description VARCHAR(255) NOT NULL,
                due_date DATE NOT NULL, 
                status ENUM ("to do", "doing", "done") DEFAULT "to do",
                user_id VARCHAR(255),
                FOREIGN KEY (user_id) REFERENCES To_Do_Users(id)
            )
        `)

        console.log("To Do List table successfully created.")
    } catch (error) {
        console.log("Failed to create To Do List table")
        console.log(error.sqlMessage)
    }
};

const populateUsersTable = async () => {
    try {
        await connection.raw(`
            INSERT INTO To_Do_Users (id, name, nickname, email)
            VALUES
            ("1", "Giovanna", "Gi", "gi@gmail.com"),
            ("2", "Bruno", "Bruninho", "bruno@gmail.com"),
            ("3", "Iohany", "Io", "Io@gmail.com"),
            ("4", "Ney Cesar", "Ney", "ney@gmail.com")
        `)

        console.log("To Do Users table successfully populated.")
    } catch (error) {
        console.log("Failed to populate Users table.")
        console.log(error.sqlMessage)
    }
};

const populateToDoListTable = async () => {
    try {
        await connection.raw(`
            INSERT INTO To_Do_List (id, title, description, due_date, status, user_id)
            VALUES
            ('10', "Laundry", "Wash whites separated from colors.", "2022-11-07", "doing", '1'),
            ('20', "Dishes", "Do the dishes and dry them after.", "2022-11-17", "to do", '2'),
            ('30', "Groceries", "Go to the store to get milk and butter.", "2022-11-01", "done", '3'),
            ('40', "Vaccum", "Vaccum all floors.", "2022-11-04", "to do", '4'),
            ('50', "Study", "Catch up on late work for school.", "2022-11-03", "doing", '1'),
            ('10', "Laundry", "Wash whites separated from colors.", "2022-11-07", "doing", '2'),
            ('20', "Dishes", "Do the dishes and dry them after.", "2022-11-17", "to do",'3'),
            ('30', "Groceries", "Go to the store to get milk and butter.", "2022-11-01", "done", '4')
        `)

        console.log("To Do List table successfully populated.")
    } catch (error) {
        console.log("Failed to populate To Do List table.")
        console.log(error.sqlMessage)
    }
};

createUsersTable()
populateUsersTable()
createToDoListTable()
populateToDoListTable()
// .then(()=>{populateUsersTable()})
// .then(()=>{populateToDoListTable()})
.finally(()=> process.exit())