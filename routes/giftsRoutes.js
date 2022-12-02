const express = require("express");
const router = express.Router();
const giftsController = require('../controllers/giftsController')

router
    .route('/')
    .post(giftsController.postGift) //good

router
    .route('/:gift_id')
    .get(giftsController.getSingleGift) //good
    .put(giftsController.putGift) //good
    .delete(giftsController.deleteGift) //good

module.exports = router;