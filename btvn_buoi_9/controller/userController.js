const User = require("../models/userModel");
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const registerUser = async (req, res) => {
    // code db, handler 
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const newUser = await User.create({ name, email, password });
    if (newUser) {
        res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: generateToken(newUser._id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
}

const loginUser = async (req, res) => {
    // code db, handler 
    var sessData = req.session;

    // 2. Check email exists in db 
    const userLogin = await User.findOne({ email: req.body.email });
    console.log('userLogin: ' + userLogin);
    if (!userLogin) {
        return res.status(400).send('Email not exists in database');
    }

    // 3. Check password 
    const checkPassword = req.body.password == userLogin.password;
    if (!checkPassword) {
        return res.status(400).send('Passowrd invalid');
    }

    // 4. Return token jwt
    const token = jwt.sign({ _id: userLogin._id, name: userLogin.name, email: userLogin.email }, 'masobimat01');

    sessData.auth_token = token;
    console.log(token);

    res.status(200).json({
        _id: userLogin._id,
        name: userLogin.name,
        email: userLogin.email
    });
    // res.status(204).send();

}

const profileUser = asyncHandler(async (req, res) => {
    // code db, handler 
    var sessData = req.session;
    let token = sessData.auth_token;
    if (!token) return res.status(401).send('You do not have permission 4 this action');
    const users = await User.find();
    res.status(200).send(users);

})

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);

})

const authLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid password or username');
    }
})

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById((req.user._id));
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(401);
        throw new Error('User not found');
    }
})

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password;
        }

        const updateUser = await user.save();
        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            password: updateUser.password,
            email: updateUser.email
        })
    } else {
        res.status(401);
        throw new Error('User not found');
    }
});

const deleteUser = asyncHandler(async (req, res) => {
    
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.send('Deleted');
    } catch (error) {
        res.status(401);
        throw new Error(error);
    }
});

const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            password: user.password,
            email: user.email
        })
    } else {
        res.status(401);
        throw new Error('User not found');
    }
});

const updateUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password;
        }

        const updateUser = await user.save();
        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            password: updateUser.password,
            email: updateUser.email
        })
    } else {
        res.status(401);
        throw new Error('User not found');
    }
});

const softDeleteById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        try {
            // change delete status to 'true'
            await User.findByIdAndUpdate(req.params.id, { deleted: true });
            res.status(200).json('User Deleted');
          } catch (error) {
            res.status(500).json(error)
          }
    } else {
        res.status(401);
        throw new Error('User not found');
    }
});

module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser;
module.exports.authLogin = authLogin;
module.exports.profileUser = profileUser;
module.exports.getUsers = getUsers;
module.exports.getUserProfile = getUserProfile;
module.exports.updateUserProfile = updateUserProfile;
module.exports.deleteUser = deleteUser;
module.exports.getUserById = getUserById;
module.exports.updateUserById = updateUserById;
module.exports.softDeleteById = softDeleteById;