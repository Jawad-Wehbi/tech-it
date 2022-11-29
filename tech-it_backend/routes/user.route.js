const router = require('express').Router();
const user = require('../controllers/user.controller');

// getAllMembers
router.get('/getAllMembers', user.getAllMembers);
// getQuestionsByTest
router.post('/getQuestionsByTest', user.getQuestionsByTest);

module.exports = router;