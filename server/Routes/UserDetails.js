const express = require('express');
const router = express.Router();
const {enterDetails, getDetails} = require('../Controller/UserDetails')
const {protect} = require('../middleware/authMiddleware')

router.route('/',protect).get(getDetails).post(enterDetails);

module.exports = router;