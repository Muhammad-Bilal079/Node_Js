import express from 'express'
import clientrouter from './Routes/clientroute.js'
import ownerroute from './Routes/ownerroute.js'
const app= express()

// is main epress Roter KA USE KARKAY ROUTES BANAY HAIN or her role ki alag file bana kar kam kia hai 
// or import export ka use hai dusri file ka use karnay kay laiy  

app.use("/client",clientrouter)
app.use("/owner",ownerroute)

app.listen(5000,()=>{
    console.log('server is running');
})