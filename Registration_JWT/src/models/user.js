import mongoose from "../config/db.js";

//schema define krnay kay do tarikay hain pehla kay simple js object or dusra yaeh class or methods 
//wala yeah ziada efficent hai is liay used kia hai

let userSchema = new mongoose.Schema(
    { 
        name: String,
        email:{
            type:String,
            required:true
        },
        username:String,
        password:String,
        role:{
            type:String,
            Enumerator :['admin','teacher','student'],
            default:"student"
        }
    
    }
    ,{
        timestamps:true
    }
)
 

const User = mongoose .model('User',userSchema);

export default User