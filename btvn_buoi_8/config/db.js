const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect('mongodb://localhost/shop-ecommerce');

        console.log('Mongodb connected: ');
    } catch (error) {
        console.log('Error connect to mongodb');
    }
}

module.exports = connectDB;