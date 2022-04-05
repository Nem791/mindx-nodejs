var express = require('express');
const { registerUser, loginUser, profileUser, getUsers, authLogin, getUserProfile, updateUserProfile, deleteUser, getUserById, updateUserById, softDeleteById} = require('../controller/userController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// 1.
// @desc: Register new user
// @route: POST /api/users
// @access: Public - return token
router.post('/', registerUser);

router.post('/loginTest', loginUser);
router.get('/profileTest', profileUser);

// 2.
// @desc: Get all users
// @route: GET /api/users
// @access: Private/admin
router.get('/', protect, isAdmin, getUsers);

// 3.
// @desc: Login API
// @route: POST /api/users/login
// @access: Public - return token
router.post('/login', authLogin);

// 4.
// @desc: Get profile user
// @route: GET /api/users/profile
// @access: Private - Su dung token
router.get('/profile', protect, getUserProfile);

// 5.
// @desc: Update profile user
// @route: PUT /api/users/profile
// @access: Private - Su dung token
router.put('/profile', protect, updateUserProfile);

// 6.
// @desc Delete user
// @route: GET /api/users/:id
// @access: Private/admin
router.delete('/:id', protect, isAdmin, deleteUser);

// 7.
// @desc Get user by Id
// @route: GET /api/users/:id
// @access: Private/admin
router.get('/:id', protect, isAdmin, getUserById);

// 8.
// @desc Update by Id
// @route: GET /api/users/:id
// @access: Private/admin
router.put('/:id', protect, isAdmin, updateUserById);

// 8.1.
// @desc Soft delete by Id
// @route: DELETE /api/users/soft-delete/:id
// @access: Private/admin
router.delete('/soft-delete/:id', protect, isAdmin, softDeleteById);


module.exports = router;
