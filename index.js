const express = require("express");
const app = express();
const userRouter = require("./routes/route");
const { connectToDB } = require("./connection");
const { logReqRes } = require("./middleweres");

//connect to db
connectToDB("mongodb://localhost:27017/users").then( () => {
    console.log("Connected to db");
});

const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
