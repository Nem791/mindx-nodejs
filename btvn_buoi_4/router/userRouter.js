const express = require('express');
const userRouter = express.Router();

// CRUD with user 
const users = [
    {
        id: '1',
        age: 18, // Chi nhan so tu` 1-200
        email: 'victory1080@gmail.com', // Chi nhan format email, sai thi bao loi~
        name: 'Nem',
        gender: 0 // Chi nhan 0(nam) hoac 1(nu)
    },
    {
        id: '2',
        age: 20, // Chi nhan so tu` 1-200
        email: 'victory9999@gmail.com', // Chi nhan format email, sai thi bao loi~
        name: 'Nam',
        gender: 0 // Chi nhan 0(nam) hoac 1(nu)
    }
]

userRouter.get('/', function (req, res) {
    res.send(users);
});

userRouter.get('/:id', function (req, res) {
    let userResult = users;
    userResult.forEach((element, index) => {
        if (element.id === req.params.id) {
            res.send(userResult[index]);
        }
    });
    res.send('Khong co ket qua phu hop');

});

userRouter.post('/', function (req, res) {
    const newUsers = {
        id: users.length + 1,
        name: req.query.name
    };
    users.push(newUsers);
    res.send(users);
});

userRouter.put('/', function (req, res) {
    let userResult = users;
    if (req.query.id === undefined || req.query.name === undefined) {
        return res.send('Chưa đủ trường dữ liệu');
    } else {
        for (let index = 0; index < userResult.length; index++) {
            if (userResult[index].id === req.query.id) {
                userResult[index].name = req.query.name;
                return res.send(userResult);
            }
            
        }
        res.send('ID ko tồn tại');
    }
});

userRouter.delete('/', function (req, res) {
    for (let index = 0; index < users.length; index++) {
        if (users[index].id === req.query.id) {
            users.splice(index, 1);
            return res.send(users);
        }
        
    }
    res.send('ID ko tồn tại');
});

// BTVN
// handling manga api/user
// localhost:3002/ -> Tra ve danh sach user
// POST localhost:3002/ {id, name: } -> Them user moi vao array (POSTMAN) va tra ve mang user moi
// PUT localhost:3002/ {id, name } -> Cap nhat ten 1 user nao do 
// validate neu ID k ton tai 
// DELETE localhost:3002/ {id, name } -> Xoa ten 1 user ra khoi mang
// validate neu ID k ton tai 

module.exports = userRouter;