const express = require('express');

const app = express();

app.get('/' , (req,res) =>{
   return res.send(`Hello  ${req.query.name}`)
});
app.get('/about' , (req,res) =>{
   return res.send("Hello From About Page")
});
app.get('/contactUs' , (req,res) =>{
   return res.send("Hello From Contact Us Page")
});

 
app.listen(8000 , () => console.log("Server Start")
)