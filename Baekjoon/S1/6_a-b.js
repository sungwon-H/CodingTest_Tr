const fs = require('fs'); // 파일시스템사용
const Minus = fs.readFileSync('./dev/stdin').toString().split(' ');
console.log(Number(Minus[0])-Number(Minus[1]));