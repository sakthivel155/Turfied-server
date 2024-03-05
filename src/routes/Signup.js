const express = require('express')
const cors = require("cors");
const UserModel = require("../models/user");

const route = express.Router();

    route.use(cors());
    route.use(express.json());

    route.post("/", (req, res) => {
		UserModel.create(req.body)
			.then((user) => res.json(user))
			.catch((err) => res.json(err));
   });
  
module.exports = route