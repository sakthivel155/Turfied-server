
const mongoose =require('mongoose')
const userSchmea = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	}
});

const UserModel = mongoose.model("user",userSchmea)
module.exports = UserModel