import mongoose from "../config/db.js";

let userSchema =  { 
    name: String,
    email:String,
    username:String

}

const User = mongoose .model('User',userSchema);

export default User