const express = require("express");
const cors = require("cors");
const UserModel = require("../models/user");

const route = express.Router();

route.use(cors());
route.use(express.json());

route.post("/", (req, res) => {
        //  res.json(req.body.msg) 
    const { useridentity, userpassword } = req.body;
    UserModel.findOne({ $or: [{email:useridentity},{username:useridentity}]})
             .then((user)=>{
                if(user){
                    if(user.password === userpassword){
                        res.json("Login successfully")
                    }else{
                         res.json("Incorrect password");
                    }
                }else{
                    res.json("No record existed")
                }
               
             })
    
})

module.exports = route;
