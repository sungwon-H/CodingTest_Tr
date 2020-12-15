const fs = require('fs');
const Multi = fs.readFileSync('./dev/stdin').toString().split(' ');
console.log(Number(Multi[0]*Number(Multi[1])));