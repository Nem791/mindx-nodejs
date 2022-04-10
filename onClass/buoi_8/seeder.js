const User = require("./models/userModel");
const users = require('./data/users');
const products = require('./data/products');
const reviews = require('./data/reviews.json');
const connectDB = require('./config/db');
const { Product, Review } = require("./models/productModel");

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await User.insertMany(users);
        const userAdmin = await User.findOne({email: 'admin@example.com'});

        const sampleProducts = products.map((product) => {
            return {...product, user: userAdmin._id}
        });

        const userList = await User.find();
        reviews.forEach(review => {
            const rndInt = Math.floor(Math.random() * 3);
            review.user = userList[rndInt]._id;
        });

        await Review.deleteMany();
        await Review.insertMany(reviews);

        for (let index = 0; index < sampleProducts.length; index++) {
            const rndInt = Math.floor(Math.random() * 30) + 1;
            const random = await Review.aggregate([{ $sample: { size: rndInt } }]);
            sampleProducts[index].reviews = random
        }

        await Product.deleteMany();
        await Product.insertMany(sampleProducts);
        console.log('Data imported success');

    } catch (error) {
        console.log(error);
        console.log('Data imported failed');
    }
}

importData();