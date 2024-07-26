import jwt from 'jsonwebtoken'

//this auth middle ware can verify token
let authMiddleware = (req, res, next) => {
    var token = req.headers.authorization.split(" ")[1]

    try {
        var decoded = jwt.verify(token, process.env.JWT_Token);
        //    console.log(decoded) 
        next()

    } catch (error) {
        res.status(403).json({
            msg:error
        })
    }

}

export default authMiddleware