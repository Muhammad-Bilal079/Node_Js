import User from "../models/user.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

let loginController = async (req, res) => {

    // 1. user ka data mangao pehlay login form say 
    const { email, password } = req.body //destructure
    // console.log(email,password);

    //find user in database
    const user = await User.findOne({ email: email });

    if (user !== null) {
        // console.log(user.password);
        // console.log(password);

        //bcrypt compare is used for compare the plain password and hash password
        bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
                // Handle error, e.g., send a server error response
                return res.status(500).json({
                    msg: "Error occurred during password comparison",
                    error: err
                });
            }

            if (result) {
                // Passwords match generate token and send response

                var token = jwt.sign(req.body, process.env.JWT_TOKEN , { expiresIn: '1d' } )
                res.status(200).json({
                    msg: "Login successful",
                    token,
                    data: user
                });
            }
            else {
                // Passwords do not match
                res.status(401).json({
                    msg: "Invalid credientials"
                });
            }
        });


    }
    else {
        res.status(404).json({
            msg: "invalid email and password"
        })
    }

}


export default loginController