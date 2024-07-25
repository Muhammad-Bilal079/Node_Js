import User from "../models/user.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

let registrationController = async (req, res) => {

    // Find a user by email
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
        // If user exists, respond with the user data
        return res.status(200).json({
            msg: "User already exixst"
        });
    }

    // bcrypt password ya hash password 
    let saltRounds = 10
    let encryptedpassword = bcrypt.hashSync(req.body.password, saltRounds);
    req.body.password = encryptedpassword

    // db code here 
    const user = new User(req.body);
    user.save()
        .then(d => {
            // JWT Token 
            // res send karnay say pehlay jwt token generate karna hota hai phir res send karna hota hai
            var token = jwt.sign(req.body, process.env.JWT_TOKEN)
            // console.log("jwt token ==>",token);

            res.status(200).json({
                msg: "user saved",
                userToken:token
            });
        }).catch(e => {
            res.status(400).json({
                msg: "error "
            })
        })

}

export default registrationController