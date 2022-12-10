const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController')
const jwt = require('jsonwebtoken')

function authenticateToken ( req, res, next ) {
	const authHeader = req.headers['authorization']
	const authToken = authHeader && authHeader.split(' ')[1]
	if (authToken == null) return res.status(401).json({message:"No persmissions, please sign in."})
	jwt.verify(authToken, process.env.JWT_SECRET, (err, user) => {
		console.log(err)
		if (err) return res.status(403)
		req.user = user
	})
	next() 
}

router
    .route('/:user_id')
    .get(authenticateToken, usersController.getSingleUser) 

module.exports = router;