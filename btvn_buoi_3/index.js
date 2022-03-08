const amount = [1, 2, 2, 3, 4];
const evenSet = new Set();
var querystring = require('querystring');

amount.forEach(number => {
    if (number % 2 === 0) {
        evenSet.add(number);
    }
})

console.log(evenSet);

const fs = require('fs');

fs.readFile('./info.json', function (err, data) {
    console.log(JSON.parse(data));
    var q = querystring.stringify(JSON.parse(data));
    console.log(q);
});

let rawData = fs.readFileSync('./info.json');
console.log('gg');
console.log(JSON.parse(rawData))

/*
const http = require('http');

http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
*/




