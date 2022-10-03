import {config as dotenv} from 'dotenv'
dotenv();

export const config ={
    host: process.env.DB_HOST ||'none',
    user: process.env.DB_USER ||'none',
    password:process.env.DB_PASSWORD ||'none',
    database:process.env.DB_DATABASE|| 'none',
}