import express from 'express'

const app= express()
  const ownerroute = express.Router()

ownerroute.get('/check',(req,res)=>{
    res.send('yeah owner checkout ka res hai')
})

ownerroute.get('/pricing',(req,res)=>{
    res.send('yeah owner pricising ka res hai')
})

ownerroute.get('/sell',(req,res)=>{
    res.send('yeah owner sell ka res hai')
})


export default ownerroute;