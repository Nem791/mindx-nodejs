const User = require("../models/userModel");
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

const profileUser = async (req, res) => {
    // code db, handler 
    var sessData = req.session;
    let token = sessData.auth_token;
    if (!token) return res.status(401).send('You do not have permission 4 this action');
    const users = await User.find();
    res.status(200).send(users);

}

module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser;
module.exports.profileUser = profileUser;