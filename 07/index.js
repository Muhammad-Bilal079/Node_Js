// THREE TYPES ARE USED TO SEND DATA / PAYLOAD  FROM POSTMAN TO SERVER BY USING URL 
// 1)Querry string 
// 2)Json body 
// 3)Url segment 

import express from 'express';
import { } from 'dotenv/config'

const app = express();
app.use(express.json());

const port = process.env.port || 5000
app.listen(port, () => {
    console.log('server is running');
});
// QUERY STRING 
app.get('/', function (req, res) {
    res.send('server response dy raha hai query string used karnay per');
    console.log(req.query);
    // localhost:5000/?name=Bilal
    // sending data by using query string in above url 
})

// JSON Body 
app.post('/home', function (req, res) {
    res.send('server response dy raha hai Json body main bhi');
    console.log(req.body);
    // formula ====>post>body>raw>json
    // {
    //     "name":"John", 
    //     "age":30, 
    //     "car":null
    //     }
})

// URL SEGMENT / 
app.get('/students/:std', function (req, res) {
   
    console.log(req.params.std);

    let user = req.params.std
    res.json({
        msg: 'your url segment is working sucessfully',
        data :user
    });

    // localhost:5000/students/bilal
    // is main is tarha url mai data dy kar send kartay hain 
})

