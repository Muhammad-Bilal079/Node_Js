import express from 'express'
import dotenv from 'dotenv';
import registerRoute from './routes/registration.js';
import loginRoute from './routes/login.js';
import teacherRoute from './routes/teacher.js';
import mongoose from './config/db.js';

const app = express()
dotenv.config();
app.use(express.json())


app.use('/api',registerRoute)
app.use('/api',loginRoute)
app.use('/api',teacherRoute)


let port = process.env.PORT  
app.listen(port,()=>{
    console.log('srever is running');
})