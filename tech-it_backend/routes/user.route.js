const router = require('express').Router();
const user = require('../controllers/user.controller');

// getAllMembers
router.get('/getAllMembers', user.getAllMembers);

module.exports = router;