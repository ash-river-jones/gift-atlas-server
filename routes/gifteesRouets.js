const express = require("express");
const router = express.Router();
const gifteesController = require('../controllers/gifteesController')

router
    .route('/')
    .get(gifteesController.getAllGiftees) // good
    .post(gifteesController.postGiftee) // good

router
    .route('/:giftee_id')
    .get(gifteesController.getSingleGiftee) // good
    .put(gifteesController.putGiftee) // good
    .delete(gifteesController.deleteGiftee) // good

router
    .route('/:giftee_id/gifts')
    .get(gifteesController.getGiftsForGiftee) // good

router
    .route('/:giftee_id/purchased')
    .get(gifteesController.getPurchasedGiftsForGiftee) // good

module.exports = router;
