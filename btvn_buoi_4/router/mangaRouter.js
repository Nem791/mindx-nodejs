const express = require("express");
const mangaRouter = express.Router();

// Dinh nghia danh sach cac quyen manga 
const mangas = [
    {id: '1', name: 'Bay vien ngoc rong'},
    {id: '2', name: 'Conan'},
    {id: '3', name: 'Doraemon'},
    {id: '4', name: 'Doraemon'}
];

// handling manga
// localhost:3002/ -> Tra ve danh sach manga tren man hinh 
// POST localhost:3002/ {id, name: } -> Them quyen truyen moi vao array (POSTMAN) va tra ve mang manga moi 



mangaRouter.get('/', function (req, res) {
    res.send(mangas);
});

mangaRouter.post('/', function (req, res) {
    const newManga = {
        id: mangas.length + 1,
        name: req.body.name
    };
    mangas.push(newManga);
    res.send(mangas);
})


module.exports = mangaRouter;