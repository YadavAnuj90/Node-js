
const express = require('express');
const app = express ();
const mongoose = require('mongoose');
const fs = require ('fs');
const users = require('./MOCK_DATA .json');

const PORT = 7000;
mongoose.connect("mongodb://127.0.0.1:27017/test-db").then(() => console.log("MongoDb Connected")
).catch( (err) => console.log('Not connect with Db', err)
)

//Schema
const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastname: {
        type: String,

    },
    email: {
        type: String ,
        required:true,
        unique: true
    },
    gender: {
        type :String,
    },
    jobTitle:{
          type: String,
    }
}, {timestamps: true})

const User = mongoose.model("user" , userSchema);

app.use(express.urlencoded({extended : false}));

//Routes

app.post('/api/users' , async (req, res) => {
   
const body = req.body;
if(
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
) {
    return res.status(400).json({msg: "All fields are req"});

}
const result = await User.create({
    firstName: body.first_name,
    lastname: body.last_name,
    email:body.email,
    gender:body.gender,
    jobTitle:body.job_title

})
console.log(result);

return res.status(201).json({msg : "Success"});

})
app.get("/api/users" , async (req,res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
})

app.route('/api/users/:id')
.get( async (req , res) => {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user not found"});
    return res.json(user);
})
.delete(async (req ,res) => {
   await User.findByIdAndDelete(req.params.id);
   return res.json({status: "Success"});
    
});


app.post("/api/users" , (req,res)  => {
    const body  = req.body;
    
})

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`)
)