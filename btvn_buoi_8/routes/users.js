var express = require('express');
const { registerUser, loginUser, profileUser} = require('../controller/userController');

var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/profile', profileUser);

module.exports = router;
