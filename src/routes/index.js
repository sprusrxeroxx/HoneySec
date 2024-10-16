const express = require('express');
const router = express.Router();

const firebaseAuthController = require('../controllers/firebase-auth-controller');

// router.post('/api/login', firebaseAuthController.loginUser);
// router.post('/api/register', firebaseAuthController.registerUser);

module.exports = router;