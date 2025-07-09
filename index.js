const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());


app.get('/home',(req,res)=>{
    res.send("Welcome to the Home Page");
})

app.get('/about',(req,res)=>{
    res.send("this is the About Page");
})


app.get('/products',(req,res)=>{
    fs.readFile('db.json','utf-8',(err,data)=>{
        if(err){
            res.status(400).json({message : "Error reading file"});
        }
        else{
            const products = JSON.parse(data).products;
            res.status(200).json(products);
        }
    })
})

app.get('/users',(req,res)=>{
    fs.readFile('db.json','utf-8',(err,data)=>{
        if(err){
            res.status(400).json({message : "Error reading file"});
        }
        else{
            const products = JSON.parse(data).user;
            res.status(200).json(products);
        }
    })
})

app.listen(8080, () =>{
    console.log("Server is running on port 8080");
    
})