const User = require("./models/userModel");
const users = require('./data/users');
const connectDB = require('./config/db');

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await User.insertMany(users);
        console.log('Data imported sucess');
    } catch (error) {
        console.log('Data imported failed');
    }
}

importData();