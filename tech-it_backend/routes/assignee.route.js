const router = require('express').Router();
const assignee = require('../controllers/assignee.controller');


// postMcqAnswer
router.post('/postMcqAnswer', assignee.postMcqAnswer);

module.exports = router;