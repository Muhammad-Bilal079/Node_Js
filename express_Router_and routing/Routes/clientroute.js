import express from 'express'

const app= express()
  const clientrouter = express.Router()

clientrouter.get('/card',(req,res)=>{
    res.send('yeah client card ka res hai')
})

clientrouter.get('/reception',(req,res)=>{
    res.send('yeah client reception ka res hai')
})

clientrouter.get('/order',(req,res)=>{
    res.send('yeah client order ka res hai')
})

clientrouter.get('/price',(req,res)=>{
    res.send('yeah client price ka res hai')
})


export default clientrouter;