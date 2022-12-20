    CREATE TABLE IF NOT EXISTS 'Users' (
        id VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(40) NOT NULL
    )
