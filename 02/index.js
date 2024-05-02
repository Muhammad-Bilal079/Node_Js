// --------------------FILE HANDLING--------------------------
// create 
// Read
// update
// delete OR unlink
const fs = require("fs");

// create 
// create a file with syncronous
fs.writeFileSync('./test.txt',"My name is Muhammad Bilal ")

// asyncronous main call back function lazmi dena hota hai 
fs.writeFile("./test2.txt","This is asyncronous way of file creation",()=>{})

// read 
// read file with synchronous way
// syn return karta hai or async return nahi karta 
const result = fs.readFileSync("./test.txt","utf-8")
console.log(result);

// read file with asynchronous way
fs.readFile("./test2.txt","utf-8",(err,res)=>{
    if(err){
        console.log("error",err);
    }else{
        console.log(res);
    }
})

// update 
// update file with synchronous
fs.appendFileSync("./test.txt","\n I am a student of the University")
// fs.appendFileSync("./test.txt",`${"\n" + new Date().getDay().toLocaleString()}`)

// delete 
// fs.unlink("./test2.txt",(err1)=>{
//     console.log(err1);
// })
// it can be delete test2 file 