const fs = require('fs');
const Cal = fs.readFileSync('./dev/stdin').toString().split(' ');
console.log(Number(Cal[0]) + Number(Cal[1]));
console.log(Number(Cal[0]) - Number(Cal[1]));
console.log(Number(Cal[0]) * Number(Cal[1]));
console.log(Math.floor(Number(Cal[0]) / Number(Cal[1])));
console.log(Number(Cal[0]) % Number(Cal[1]));