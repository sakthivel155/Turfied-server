const express = require('express')
const Signup = require("./src/routes/Signup");
const  Login = require('./src/routes/Login');
const app = express();

require('./db/connection')

app.use('/signup',Signup)
app.use("/login", Login);


app.listen(5000,()=>{
  console.log("server is running on port 5000");
})