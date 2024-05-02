// is main hum middleware kay baray main discuss kar rhaya hain using querry string 
//is main postman main collection bana kar kam kia hai
import express from 'express';
import { } from 'dotenv/config'

const app = express();
//(routename , middleware , callback function)
app.get('/students',
//yeah portion middle ware ka hai
    (req, res, next) => {
    console.log(req.query.name); 
    req.query.name = "sufyan"
    // name is converted into a capital letter 
    req.query.name = req.query.name.toUpperCase();
        next();
    },
    //yeah portion callbacks function ka hai
    (req, res) => {
        let name = req.query.name
        console.log(name);
        res.json({
            "des": "data server per send kardia gia hai",
            "data":`yeah woh name hai jo middleware say change kia hai :::: ${name}`
        })

    })

let port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('server is running on port number: ' + port)
});

