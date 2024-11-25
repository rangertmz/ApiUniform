import {createConnection} from "mysql2"
import dotenv from "dotenv";


dotenv.config();

export const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    
    database: process.env.DB_NAME,
    
});

export const revokedTokens: string[] = [];

