import express from 'express'
const app = express()

console.log('port is running')

// two requests are created using .get and two are created using .post
//.get used for browser and small data

app.get('/', function (req, res) {
    res.send('is reguest kay liay hum nay (.Get)  use kia hai')
})

app.get('/login', function (req, res) {
    res.send('(.get) main data html ki form mmain hota hai')
})

// .post are running in postman software and used for more data
// post api main data hamesha json format main hi jata hai

app.post('/home', function (req, res) {
    res.json({
        "post":'is reguest kay liay hum nay (.post) use kia hai...OR ...JSON format main data send kia hai',
        "status":"true"
    })
})

app.post('/api/post2', function(req, res){
   res.json({
    "status":"true",
    "description":"yeah post ki route change karkay api banai hai"
   })
})
const port = 8000
app.listen(port)