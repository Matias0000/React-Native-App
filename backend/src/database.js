import mysql from "mysql2/promise";
import {config} from './config'


const connect = async ()=>{
    return await mysql.createConnection(config)
    // const [rows] =  await db.execute('SELECT 1+1 ')
}

connect();
