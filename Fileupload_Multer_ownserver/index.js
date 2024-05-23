// ***************** FILE UPLOAD ************************
// is main file/image upload ka kam kia hai but woh file apnay hi server per save hongi
// yeah choti appication kay liay sahi hai but bari application kay liay third party per upload karna paray ga 

import express from 'express'
import multer from 'multer'
import path from 'path'
import { config } from 'dotenv';

const app = express()
config();

// diskstorage lazmi lagana hota hai wrna exntion nahi ayaygi file kay save honay kay bad 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const extension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + extension)
    }
})

const upload = multer({ storage: storage })

// nechay wali line  per file ki jaga wohi name rakhna hai jo hum nay postman per rakha hai

app.post('/uploadfile', upload.single('file'), (req, res) => {
    res.send('file upload sucessfully')
    // console.log(req.file);
})

let port = process.env.PORT
app.listen(port, () => {
    console.log('server is running');
})