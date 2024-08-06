import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

// Database connection
// mongoose.connect(`mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@cluster0.hsjhrzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
// .then(d=>console.log('Db connected'))
// .catch(e=>console.log('DB error',e))

// yeah wala database ka url use nahi karna hai qk yeah fyp kay project main used kar lia hai  

export default mongoose