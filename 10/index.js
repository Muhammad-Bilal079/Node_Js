// ***********APPLICATION MIDDLEWARE **************
// application middleware woh middle ware hotay hain jo route say pehlay hi chal jatay hain 
// is main hum ek api create karain gay jis main hum middle ware kay through yeah check karain gay 
// kay req post ki arahi hai ya get ki or ager req get ki hoi to server per janay say pehlay hi middleware res dy day ga 

import express from 'express';
const app = express()
app.use(express.json())

// middleware
// (req.method) yeah method batay ga kay req get ki hai ya post ki 
app.use((req,res,next)=>{
    console.log(req.method);
    if(req.method === 'GET'){
        res.status(400).send('get ki request aceptable nahi hai please post kay method say hit karain')
    }else{
        next()
    }

    next();
})

app.post('/student',(req,res)=>{
    res.json({
        "msg":"req post ki honay ki waja say server per pohounchnay kay bad res aya hai yahan"
    })
})


app.listen(5000,(req,res)=>{
    console.log('server is running');
})