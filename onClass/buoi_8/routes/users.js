var express = require('express');
const registerUser = require('../controller/userController');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/', registerUser);

module.exports = router;
