import express from 'express';
const app = express();

import path from 'path';
import { fileURLToPath } from 'url';

import http from 'http'
import { Server } from "socket.io";

const server = http.createServer(app)
const io = new Server(server);

// that can help to find client is conneted or not 
io.on("connection", (socket) => {
    console.log('client conencted',socket.id);
    socket.on("disconnect",()=>{
        console.log('client disconnected',socket.id);
    })
    // listen 
socket.on('clientEvent',(payload)=>{
console.log('client payload',payload);
// speak 
io.emit('serverEvent',payload)
})
  });

 
//yeah do lines file kay path kay liay hain
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
