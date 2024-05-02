import mysql from 'mysql';

import dotenv from 'dotenv';

dotenv.config(); // Configure (use) environment variables in this file.

const database = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    user: process.env.ACCOUNT_USERNAME,
    password: process.env.ACCOUNT_PASSWORD
});

database.connect((exception) => {
    if (!exception) {
        console.log('"Database connection" succesful.')
    } else {
        console.log('"Database connection" aborted.' + {
            code: exception.code,
            exception_name: exception.name,
            exception: exception.message,
        });
    }
});

export default database;