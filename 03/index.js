// ---------------Blocking or Non-Blocking operations------------------------
const fs = require('fs')
// yeah thread pool kay sath cpus conectivity batata hai  line number 2 and 4
const os = require('os');

console.log(os.cpus().length);

// create file 
fs.writeFile('./test.txt', "this is blocking and  non-blocking or asynchronous way of writing code", (err) => {
    console.log(err);
})

// read file with non blocking and asynchronous way  qk yaeh pehlay 2 ko console karwa raha hai 
// or code ko block nahi kar raha hai
// console.log(1);
// fs.readFile('./test.txt','utf-8',(err)=>{
//     console.log("file read successfully");
// })
// console.log(2);
// console.log(3);


// read file with  blocking and synchronous way  qk yaeh pehlay 2 ko console nahi karnay dy raha hai 
// or code ko block bhi kar raha hai
// console.log(6);
// const result = fs.readFileSync('./test.txt', 'utf-8')
// console.log("hellow");
// console.log(result);
// console.log(2);

