const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const reviewSchema = mongoose.Schema({
    name: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: {type: String},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {type: String, required: true},
    image: {type: String, required: true},
    brand: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    reviews: [reviewSchema],
    rating: {type: Number, required: true, default: 0},
    numReviews: {type: Number, required: true, default: 0},
    price: {type: Number, required: true, default: 0},
    countInStock: {type: Number, required: true, default: 0},
    deleted: {type: Boolean, default: false},
    softDeletedAt: {type: Date}
    
}, {
    timestamps: true
});


const Product = mongoose.model('Product', productSchema);
const Review = mongoose.model('Review', reviewSchema);


module.exports = { Product: Product, Review: Review }
