require('dotenv').config
const express = require('express')

const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/twitter',(req,res)=>{
    res.send("demn its good")
})
app.get('/login',(req,res)=>{
    res.send('<h1>login beti</h1>')
})
console.log("Its time to reclaim");

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening ${port}`)
})