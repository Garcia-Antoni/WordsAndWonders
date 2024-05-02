import express from 'express';
import jsonwebtoken from 'jsonwebtoken';

import database from '../utils/database_connection.js';

const router = express.Router();

router.post('/user_accounts', (req, res) => {
    const sql_query = 'SELECT * FROM user_accounts WHERE e_mail = ? AND password_hash = ?';

    database.query(sql_query, [req.body.e_mail, req.body.user_password], (exception, result) => {
        if (exception) return res.json({ signin_status: false, exception_name: exception.name, message: exception.name, });

        if (result.length > 0) {
            const e_mail = result[0].e_mail;

            const JWT = jsonwebtoken.sign({
                // role_account: '', MAYBE I NEED IT IN ANOTHER TIME
                e_mail: e_mail,
            }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

            res.cookie('jsonwebtoken', JWT);

            return res.json({
                signin_status: true,
                message: '"Sign In" successfully. Welcome!',
            });
        } else {
            return res.json({
                signin_status: false,
                message: 'Incorrect credentials',
            });
        }
    });
});

export { router as user_accounts };