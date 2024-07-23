import express from 'express'
import dotenv from 'dotenv';
import registerRoute from './routes/registration.js';
import mongoose from './config/db.js';

const app = express()
dotenv.config();
app.use(express.json())


app.use('/api',registerRoute)


let port = process.env.PORT  
app.listen(port,()=>{
    console.log('srever is running');
})