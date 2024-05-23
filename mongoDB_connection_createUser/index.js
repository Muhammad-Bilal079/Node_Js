import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
let pass = process.env.PASS

// conection with  mongodb
async function letsConnect() {
    await mongoose.connect(`mongodb+srv://mb4462087:${pass}@cluster0.yk58gew.mongodb.net/`);
}

// after conection use this function and create routes and ending data into the db 
letsConnect().then((d) => {
    console.log('mongoDB conected');

    app.post('/api/friend', (req, res) => {
        // console.log(req.body);

        // define schema and create model 
        const Friends = mongoose.model('Friends', {
            username: String,
            gender: String

        });
        
        // yeah us schema ki key ki values kay liay hai 

        const frindObj = new Friends({
            username: req.body.username,
            gender: req.body.gender
        });

        // this line will save data in db 
        frindObj.save()
            .then((d) => res.send('user added in a DB sucesfully'))
            .catch((error) => res.send(error))
    })

}).catch((e) => {
    console.log('mongoDB error = ' + error);
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('server is running on port ' + port);
})