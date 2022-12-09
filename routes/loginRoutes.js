const express = require("express");
const router = express.Router();
const loginController = require('../controllers/loginController')

router
    .route('/')
    .get(loginController.login)

router
    .route('/signup')
    .post(loginController.signUp)

module.exports = router;