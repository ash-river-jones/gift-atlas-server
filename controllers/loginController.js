const knex = require('knex')(require('../knexfile'));
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

let JWT_SECRET = process.env.JWT_SECRET

exports.signUp = async (req, res) => {
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password,salt);
	const newUserID = uuidv4();
	const newUser = {
		user_id: newUserID,
		user_name: req.body.user_name,
		email: req.body.email,
		hashed_password: hashedPassword
	};
	try {
		knex("users")
		.insert(newUser)
		.then((newUserID) => {
			res.status(201).json({newUserID: newUserID[0]})
		})
		.catch((err) => {
			res.status(400).json({message:"there was an error", error:err})
		})
	} catch {
		res.status(500).send;
	}
}

exports.login = (req, res) => {
	knex("users")
		.where({email: req.body.email})
		.then((user) => {
			bcrypt.compare(
				req.body.password,
				user[0].hashed_password,
				(error, data) => {
					if(!error) {
						const authToken = jwt.sign({ 
							user_id: user[0].user_id, 
							email: user[0].email, 
							user_name:user[0].user_name 
						},JWT_SECRET)
						res.status(200).json({message:"successful login", authToken: authToken})
					} else {
						res.status(400).json({message:"this is not a valid username/password", error: error})
					}
				}
			)
		})
		.catch((error) => {
			res.status(500).json({message:"there was an error with this request", error: error})
		})
};