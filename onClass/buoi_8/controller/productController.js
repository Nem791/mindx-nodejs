const asyncHandler = require('express-async-handler');
const { default: mongoose } = require('mongoose');
const { Product } = require('../models/productModel');

const getProducts = asyncHandler(async (req, res) => {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword ? { name: { $regex: req.query.keyword } } : {deleted: false};
    const countProducts = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1));
    console.log({ ...keyword });
    res.json({
        products,
        countProducts,
        page,
        // pages: Math.ceil(count / pageSize)
    });
})

const createProduct = asyncHandler(async (req, res) => {
    const { name, description, price, image, brand, category, countInStock } = req.body;
    const product = new Product({
        name: name,
        description: description,
        price: price,
        image: image,
        brand: brand,
        category: category,
        countInStock: countInStock
    });
    const resultProduct = await product.save();
    res.status(200).json(resultProduct);
});

const createReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body;
    const productId = req.params.id;

    // 1. Check id exist in database 
    const product = await Product.findById(productId);
    if (product) {
        // 2. Check user review 
        const isReview = product.reviews.find((review) => {
            review.user.toString() === req.userId.toString()
        });
        if (isReview) {
            res.status(400);
            throw new Error('You already reviewd for this product');
        }

        // 3. Luu thong tin nguoi review vao cot review trong bang product 
        const reviewContent = {
            name: req.user.name,
            rating: Number(rating),
            comment: comment,
            user: userId
        }
        product.reviews.push(reviewContent);

        // 4. Tinh toan so luong nguoi dang review -> Luu vao cot numReviews trong bang product 
        product.numReviews = product.reviews.length;

        // BTVN 
        // 5. Tinh toan so luong rating va chia trung binh


        // 6. Thong bao ket qua review ve client 
        await product.save();
        res.status(200).json({
            message: 'Review successfully !'
        });
    } else {
        res.status(400);
        throw new Error('Product not found');
    }


});

const getProductById = asyncHandler(async (req, res) => {
    try {
        const product = await Product.aggregate([{ $match: {_id: mongoose.Types.ObjectId(req.params.id) } }]);
        console.log(product);
        res.json({
            product
        });
    } catch (error) {
        res.send(`${error}`);
    }
});

const deleteProductById = asyncHandler(async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.send(`Deleted: ${req.params.id}`);
    } catch (error) {
        res.send(`${error}`);
    }
});

const updateProductById = asyncHandler(async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const update = req.body;

        // `doc` is the document _before_ `update` was applied
        let doc = await Product.findOneAndUpdate(filter, update);
        const product = await Product.aggregate([{ $match: { _id: mongoose.Types.ObjectId(req.params.id) } }]);
        res.json({
            product
        });
    } catch (error) {
        res.send(`${error}`);
    }
});

const getTop3Products = asyncHandler(async (req, res) => {
    console.log('lol');
    try {
        const products = await Product.aggregate([
            { $project: { "name": 1, "review_count": { $size: "$reviews" } } },
            { $sort: { "review_count": -1 }},
            { $limit: Number(req.params.number)}]);
        res.json({
            products
        });
    } catch (error) {
        console.log(error);
        res.send(`Er: ${error}`);
    }
});

const softDeleteById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log('lol');
    if (product) {
        try {
            // change delete status to 'true'
            await Product.findByIdAndUpdate(req.params.id, { deleted: true, softDeletedAt: Date.now() });
            res.status(200).json('Product Deleted');
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(401);
        throw new Error('Product not found');
    }
});

module.exports = {
    getProducts,
    createProduct,
    createReview,
    getProductById,
    deleteProductById,
    updateProductById,
    getTop3Products,
    softDeleteById
}