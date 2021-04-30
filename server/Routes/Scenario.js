const express = require('express');
const router = express.Router();
const {enterScenario, getScenario, getScenarioById} = require('../Controller/Scenario')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(getScenario).post(enterScenario);
router.get('/:id', getScenarioById);

module.exports = router;