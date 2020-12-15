const fs = require('fs');
const TR = fs.readFileSync('./dev/stdin').toString().split(' ');
const a = parseInt(TR[0]);
const b = parseInt(TR[1]);
const c = parseInt(TR[2]);
console.log((a+b)%c);
console.log(((a%c)+(b%c))%c);
console.log((a*b)%c);
console.log(((a%c)*(b%c))%c);