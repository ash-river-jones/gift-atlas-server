const express = require("express");
const router = express.Router();
const giftsController = require('../controllers/giftsController')
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
    .route('/')
    .post(authenticateToken, giftsController.postGift) //good

router
    .route('/:gift_id')
    .get(authenticateToken, giftsController.getSingleGift) //good
    .put(authenticateToken, giftsController.putGift) //good
    .delete(authenticateToken, giftsController.deleteGift) //good

module.exports = router;