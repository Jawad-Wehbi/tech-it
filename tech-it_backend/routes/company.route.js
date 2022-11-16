const router = require('express').Router();
const company = require('../controllers/company.controller');

// getalltests
router.get('/getalltests', company.getAlltests);
// getQuestionsByTopic
router.post('/getQuestionsByTopic', company.getQuestionsByTopic);
// getcompanyinfo
router.post('/getCompanyInfo', company.getCompanyInfo);
// addTeamMember
router.post('/addTeamMember', company.addTeamMember);


module.exports = router;