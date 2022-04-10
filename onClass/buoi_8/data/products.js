const productArr = [];


for (let index = 0; index < 51; index++) {
    const productObject = {
        name: `San pham so ${index + 1}`,
        image: 'https://i.xeoto.com.vn/auto/tesla/model-3/tesla-model-3.png',
        description: `Tesla Model ${index + 1} là phiên bản xe điện thân thiện với môi trường rất được ưa chuộng tại thị trường Châu Âu. Đây là phiên bản cao cấp trong bộ ba Tesla Model 3 với nhiều trang bị hiện đại bậc nhất. Dòng xe này được giới chuyên gia đánh giá cao trong phân khúc xe chạy điện thân thiện với môi trường`,
        brand: 'Tesla',
        category: 'Electronic',
        price: 930.00,
        countInStock: 0,
        rating: 0,
        numberReviews: 0
    
    }
    productArr.push(productObject);
}

module.exports = productArr;