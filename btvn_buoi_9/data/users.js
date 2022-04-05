const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'Nam Nguyen Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Nem',
        email: 'admin1@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Nam791',
        email: 'admin2@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
]

module.exports = users;