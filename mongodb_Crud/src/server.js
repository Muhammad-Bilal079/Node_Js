const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
                                // CRUD Operations

// connect mongose using compass link 
mongoose.connect('mongodb://localhost:27017')
    .then((data) => {
        console.log("Connect mongoose to database");
    })
    .catch(err => console.error(err));

let studentschema = new mongoose.Schema({
    StudentId: Number,
    Name: String,
    address: String,

}, {
    timestamps: true,
})
const student = mongoose.model('Student', studentschema)

// create routes and create data from database
app.get('/api/student/create', (req, res) => {

    let studentobj = new student({
        StudentId: req.query.StudentId,
        Name: req.query.Name,
        address: req.query.address,
    })

    studentobj.save()
        .then((data) => {
            console.log('saved');
            res.status(201).send('created successfully')
        })
        .catch((e) => {
            res.status(404).send("error"+e)
        })

})

// Read data from data base 
app.get('/api/getAlldata', (req, res) => {

    // modelNames.find()  ===> read karnay kay liay

    student.find()
    .then((data) => {
        res.status(200).json({
            msg:'read data from data base',
            data:data
        })
    })
    .catch((err) => {
        res.status(404).json({
            msg:'error ' + err
        })
    })

    
})


// Delete data from database 

app.delete('/api/students/:studentId', (req, res)=>{
    console.log(req.params.studentId);

    // models.deleteone() ==> for delete data from data base 
    student.deleteOne({
        // yahan per hum abhi mongodb ki student id lay rahay hain but is say professionaly kam nahi hota 
        _id: req.params.studentId,
    })
    .then((data)=>{
        res.status(200).json({
            msg:'delete data from database'
        })
    })
    .catch((err)=>{
        res.send(err + 'this is error');
    })
   
})

// update data from data base  by using put method 
app.put('/api/student/update',(req, res)=>{

    console.log("before delete the id",req.body);
    const id = req.body._id;
    delete req.body._id;
    console.log("after delete the id", req.body);

    student.findByIdAndUpdate(id,req.body)
    .then((data)=>{                               //.then or .cath new update hai is say pehlay callback dia jata tha
        // console.log(data);
        res.status(200).json({
            msg:'data updated successfully',
            data: data
        })
    })
    .catch((err)=>{
        console.log(err);
    })

    
})



// sirf check karnay kay liay route banaya tha 
// app.get('/test', (req, res) => {
//     res.status(200).json({
//         msg: "ok"
//     })

// })



port = 5000
app.listen(port, () => {
    console.log('server started');
});

