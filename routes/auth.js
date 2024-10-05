const express = require('express');
const User = require('../Schemas/user_model');
const {signin,signup} = require('../controllers/user_controller');
const router = express.Router();


// User sign-up route
router.post('/signup', signup);

// User sign-in route
router.post('/signin', signin);


module.exports = router;