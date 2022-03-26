var express = require('express');
var router = express.Router();
const CarModel = require('../model/car_model');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   CarModel.findOne({
//     _id: req.params.id
//   }).exec((err, car) => {
//     if (err) {
//       res.send('Co loi~ xay ra');
//     } else {
//       if (car.length > 0) {
//         console.log('Get thong tin car by id thanh cong');
//       } else {
//         res.send('Khong tim thay thong tin car')
//       }
//     }
//   })
// })

router.put('/:id', function (req, res, next) {
  CarModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { manufacture: req.body.manufacture } },
    { upsert: true },
    (err, car) => {
      if (err) {
        res.send('Xay ra loi update model');
      } else {
        res.json(car);
      }
    }
  )
})

router.get('/:id', function (req, res, next) {
  CarModel.findOne({
    _id: req.params.id
  }).exec((err, car) => {
    if (err) {
      res.send('Co loi~ xay ra');
    } else {
      if (car.length > 0) {
        console.log('Get thong tin car by id thanh cong');
      } else {
        res.send('Khong tim thay thong tin car')
      }
    }
  })
})

router.post('/', function (req, res, next) {
  const car = new CarModel();
  car.name = req.body.name;
  car.manufacture = req.body.manufacture;
  car.price = req.body.price;

  car.save((err, car) => {
    if (err) {
      console.log('Co loi~');
      res.send('Loi insert data');
    } else {
      console.log('Insert Car moi thanh cong');
      res.send(car);

    }
  })

});

module.exports = router;
