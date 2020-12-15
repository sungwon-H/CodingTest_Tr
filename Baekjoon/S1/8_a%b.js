const fs = require('fs');
const Divide = fs.readFileSync('./dev/stdin').toString().split(' ');
console.log(Number(Divide[0])/Number(Divide[1]));