const express = require('express');
const router = express.Router();

const {createMutualFunds, getMutualFunds} = require('../Controller/MutualFunds');

router.route('/').get(getMutualFunds).post(createMutualFunds);

module.exports = router