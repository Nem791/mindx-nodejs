var express = require('express');
const { getProducts, createProduct, createReview, getProductById, deleteProductById, updateProductById, getTop3Products, softDeleteById } = require('../controller/productController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

var router = express.Router();

// 1.
// @desc: Get all products
// @route: GET /api/products
// @access: Public
router.get('/', getProducts);

// 2.
// @desc: Create a product
// @route: POST /api/products
// @access: Private/admin
router.post('/', protect, isAdmin, createProduct);

// 3.
// @desc: Create Review for product
// @route: POST /api/products/:id/reviews
// @access: Private
router.post('/:id', protect, createReview);

// 4.
// @desc: Get product by ID
// @route: GET /api/products/:id
// @access: Public
router.get('/:id', getProductById);

// 5. Delete product by ID
// @desc: Delete product by ID
// @route: Delete /api/products/:id
// @access: Private/admin
router.delete('/:id', protect, isAdmin, deleteProductById);

// 6. Update product by ID
// @desc: Update product by ID
// @route: PUT /api/products/:id
// @access: Private/admin
router.put('/:id', protect, isAdmin, updateProductById);

// 7. Get top products(Top 3)
// @desc: Get top products by ID
// @route: GET /api/products/top
// @access: Public
router.get('/getTop/:number', getTop3Products);

// 7.1 Soft-delete
// @desc: Get top products by ID
// @route: DELETE /soft-delete
// @access: Private/admin
router.delete('/soft-delete/:id', softDeleteById);

module.exports = router;
