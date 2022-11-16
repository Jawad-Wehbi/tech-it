const router = require('express').Router();
const user = require('../controllers/auth.controller');
const auth = require('../middlewares/auth.middleware');
// register
router.post('/register', user.register);
// login
router.post('/login', user.login);
module.exports = router;