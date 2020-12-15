const fs = require('fs'); //  파일 시스템 모듈 사용 
/// 제출시 변경 
const plus = fs.readFileSync('./dev/stdin').toString().split(' '); // 파일 시스템 모듈로 .fs폴더의 test.txt파일을 읽어온다 그리고 문자열로 변경하고 split의 문자로 배열로 넣는다

console.log(Number(plus[0])+Number(plus[1]));



