import express from 'express';
import dotenv from 'dotenv';
import { MWFn } from './MiddleWare/middleware.js';
const app = express()

// is main hum nay seprate middle ware ki file banai hai or forn loop kay throuh object ki values ko acess kia hai 

dotenv.config();


app.get('/student',MWFn,(req,res)=>{
    res.json({
        "msg":`hello ${req.query.fullDetail}`
    })

})


let port = process.env.PORT 
app.listen(port,()=>{
    console.log('sever is running');
    
})