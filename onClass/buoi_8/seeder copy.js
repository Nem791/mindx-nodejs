const User = require("./models/userModel");
const users = require('./data/users');
const products = require('./data/products.json');
const reviews = require('./data/reviews.json');
const connectDB = require('./config/db');
const { Product, Review } = require("./models/productModel");

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await User.insertMany(users);
        const adminId = await User.findOne({ isAdmin: true });
        const userList = await User.find();
        reviews.forEach(review => {
            const rndInt = Math.floor(Math.random() * 3);
            review.user = userList[rndInt]._id;
        });

        await Review.deleteMany();
        await Review.insertMany(reviews);

        for (let index = 0; index < products.length; index++) {
            products[index].user = adminId._id;
            const random = await Review.aggregate([{ $sample: { size: 5 } }]);
            products[index].reviews = random
        }

        await Product.deleteMany();
        await Product.insertMany(products);
        console.log('Data imported sucess');

    } catch (error) {
        console.log(error);
        console.log('Data imported failed');
    }
}

importData();