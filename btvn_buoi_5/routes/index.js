var express = require('express');
var router = express.Router();

let price = 0;

let veggyStore = [
  {
      title: "Brocolli - 1 Kg",
      image: "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg",
      price: 120,
      year: 2017        
  },
  {
      title: "Cauliflower - 1 Kg",
      image: "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg",
      price: 60,
      year: 2015        
  },
  {
      title: "Cucumber - 1 Kg",
      image: "https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg",
      price: 48,
      year: 2015        
  },
  {
      title: "Beetroot - 1 Kg",
      image: "https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg",
      price: 32,
      year: 2015        
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { veggyStore: veggyStore, price: price });
});

/* GET home page. */
router.post('/cart', function(req, res, next) {
  console.log(req.body);
  let uniqueSet = JSON.parse(req.body.array_object);
  // uniqueSet = uniqueSet.filter(d => d.quantity !== 0);
  res.render('cart', { arrayObjects: uniqueSet });
});

// router.delete('/cart', function (req, res, next) {
//   res.redirect('back');
// })

module.exports = router;
