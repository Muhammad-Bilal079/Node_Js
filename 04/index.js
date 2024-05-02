// yeah express ko import karnay ka old method hai 
// const express = require('express')

// yeah express ko import karnay ka new method hai ES6 wala
import express from 'express'

const app = express()

console.log("hello world");

// is main hum nay routes ('/') ko use karkay sever create kia hai
app.get('/',function(req,res){
    res.send("This is an home page!")
})

app.get('/signup',function(req,res){
    res.send("You are in signup page!")
})

app.get('/login',function(req,res){
    res.send("You are in login page!")
})

app.get('/post',function(req,res){
    res.send("You are in post page!")
})

let port = 8000
app.listen(port)