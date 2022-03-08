const fs = require('fs');

let string1 = fs.readFileSync('./txtFile/file1.txt', {encoding:'utf8', flag:'r'});
let string2 = fs.readFileSync('./txtFile/file2.txt', {encoding:'utf8', flag:'r'});


fs.writeFileSync('./txtFile/finish-sync.txt', `${string1} + ${string2}`)