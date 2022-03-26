const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    console.log('token: ' + token);
    if (!token) return res.status(401).send('You do not have permission 4 this action');
    try {
        const checkToken = jwt.verify(token, 'masobimat01');
        req.user = checkToken;
        next();
    } catch (error) {
        res.status(400).send(error)
    }
}