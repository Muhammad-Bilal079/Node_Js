import User from "../models/user.js";

let registrationController = (req,res)=>{

    // db code here 
const user = new User(req.body);
user.save()
.then(
    res.status(200).json({
    msg:"user saved"
}))

    
}

export default registrationController