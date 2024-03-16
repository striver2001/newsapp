import express from 'express';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
dotenv.config();
const PORT =  process.env.PORT || 8000;


app.use(cors({
    origin: "http://localhost:3000"
}));
                            
app.use('/', Route );
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;



Connection(username, password);

app.listen(PORT, ()=>{
    // Connection();
    console.log(`server is running on port ${PORT}`);

});

DefaultData();