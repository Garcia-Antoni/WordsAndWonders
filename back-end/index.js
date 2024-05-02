import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';

import { user_accounts } from './routes/user_accounts.routes.js';

dotenv.config(); // Configure (use) environment variables in this file.

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT'],
}));
app.use(express.json()); // Using a '.json' format to communicate between 'Front End' and 'Back End'.

app.use('/auth', user_accounts);

const server_port = process.env.SERVER_PORT;
app.listen(server_port, () => {
    console.log('Running...');
});