import mongoose from "mongoose";

async function letsConnect() {
    await mongoose.connect(`mongodb+srv://mb4462087:STRRDf8yMzt1JfJH@cluster0.yk58gew.mongodb.net/`);
}

letsConnect().then((d)=>{console.log('conected DB')}).catch(e=>console.log(e))
