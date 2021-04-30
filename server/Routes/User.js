const express = require('express');
const router = express.Router();
const {authUser, registerUser, getUserDetails} = require('../Controller/User')
const {protect} = require('../middleware/authMiddleware')

router.post('/adduser', registerUser);
router.post('/authuser', authUser);
router.get('/profile',protect, getUserDetails)

module.exports = router