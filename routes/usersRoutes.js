const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController')

router
    .route('/:user_id')
    .get(usersController.getSingleUser) 

module.exports = router;