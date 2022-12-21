    CREATE TABLE IF NOT EXISTS 'Users' (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(40) NOT NULL
    )

    CREATE TABLE IF NOT EXISTS 'Recipes' (
        id VARCHAR(255) PRIMARY KEY,
        userId VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        instructions VARCHAR(255) NOT NULL,
        date NOT NULL,
        FOREIGN KEY (userId) REFERENCES Users(id)
    )
