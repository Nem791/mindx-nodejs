const dateFormat1 = require('./dateFormat1');

function dateFormat2(format) {
    const dateFormat1 = format.split('-');
    console.log(dateFormat1);
    return dateFormat1[2] + '/' + dateFormat1[1] + '/' + dateFormat1[0];
}

console.log(dateFormat2(dateFormat1(13, 12, 2001)));