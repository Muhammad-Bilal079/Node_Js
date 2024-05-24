import express from 'express'
import multer from 'multer'
import path from 'path'
import { config } from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'
import './DataBase/db.js'

const app = express()
config();

// Configuration cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


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

// image upload API 
app.post('/uploadfile', upload.single('file'), async (req, res) => {

    // Upload an image by cloudinary
    const uploadResult = await cloudinary.uploader.upload(req.file.path).catch((error) => { console.log(error) });
    console.log("secure URL =>", uploadResult.secure_url);
    res.send('file upload sucessfully')

    // after upload in cloudinary delete this image in my local server folder uploads 
    fs.unlink(req.file.path, (error) => {
        error ? console.log(error) : console.log('file is uploaded in cloudinary and  deleted in local server')
    })
})

let port = process.env.PORT
app.listen(port, () => {
    console.log('server is running');
})