const router = require('express').Router();
const company = require('../controllers/company.controller');

// getalltests
router.get('/getalltests', company.getAlltests);
// getQuestionsByTopic
router.post('/getQuestionsByTopic', company.getQuestionsByTopic);


module.exports = router;