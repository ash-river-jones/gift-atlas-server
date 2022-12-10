const express = require("express");
const router = express.Router();
const gifteesController = require('../controllers/gifteesController')

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
    .get(authenticateToken, gifteesController.getAllGiftees) // good
    .post(authenticateToken, gifteesController.postGiftee) // good

router
    .route('/:giftee_id')
    .get(authenticateToken, gifteesController.getSingleGiftee) // good
    .put(authenticateToken, gifteesController.putGiftee) // good
    .delete(authenticateToken, gifteesController.deleteGiftee) // good

router
    .route('/:giftee_id/gifts')
    .get(authenticateToken, gifteesController.getGiftsForGiftee) // good

router
    .route('/:giftee_id/purchased')
    .get(authenticateToken, gifteesController.getPurchasedGiftsForGiftee) // good

module.exports = router;
