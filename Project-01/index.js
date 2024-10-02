
const express = require('express');
const app = express ();
const users = require('./MOCK_DATA .json');

const PORT = 7000;

//Routes
app.get('/api/users' , (req, res) => {
    return  res.json(users);
})

app.route('api/users/:id')
.get((req , res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
.post('/api/users',(req ,res) => {
    return res.json("Status Pending")
})
.patch((req ,res) => {
    return res.json("Status Pending")

})



app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`)
)