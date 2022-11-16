const router = require('express').Router();
const company = require('../controllers/company.controller');

// getalltests
router.get('/getalltests', company.getAlltests);


module.exports = router;