// is main hum querry string (?) kay baray main code likh rahay hain
//querry string server per data send karnay kay kam ata hai
//localhost:8000/home?name=bilal    <===This is a way to send data by querry string

import express from 'express';
const app = express();

console.log('server started');

app.get('/', (req, res) => {
    res.status(202).send('this is home page and its satus is defined is 202')
})

//yahan hum url main querry string used karkay data send karain gay or woh data hamaray pass
// request main ayayga

//localhost:8000/senddata?name=bilal&id=Csc22s000&des=i am a student
//yeah woh url hai jo create kia hai with response

app.get('/senddata', (req, res) => {
    console.log(req.query)
    res.status(202).json({
        "des":"is main json format main data show hoga or status 202 defined hia hai",
        "querry string data":req.query
    })
})

//is main hum nay sirf server per data send kia hai by querry string 
//or nechay dia hoa url used kia hai
//hum nay response nahi lia hai is liay postman main sending hi hoti rahay gi 

app.get('/data',(req,res)=>{
    console.log(req.query)
    // localhost:8000/data?name=sufyan&id=Csc22s220&des=student
})

const port = 8000
app.listen(port);

