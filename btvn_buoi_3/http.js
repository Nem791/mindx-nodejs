const http = require('http');
const info = {
    name: "Nem",
    age: 22
}

http.createServer((req, res) => {
    if (req.url === '/index') {
        res.write("Trang chủ");
    } else if (req.url === '/about') {
        res.write(`Ten: ${info.name}, Tuoi: ${info.age}`);
    } else {
        res.write('Đường dẫn k tồn tại');
    }
    res.end();
}).listen(8080);