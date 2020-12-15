const fs = require('fs');
const Mul = fs.readFileSync('./dev/stdin').toString().split('\n'); // 개행으로인해 split에 \r\n기준사용
const a = parseInt(Mul[0]);// 472  // index[0]=472
const b = parseInt(Mul[1]); // 385 // index[1]=385
const b1 = (String(b));//b1값 배열로 분해 index[0]= 3 , index[1]=8, index[2] = 5
const result = (a*b);
// for(i=0; i<3; i++){
//     console.log(a)
//     for()
// }
for(i=2; i>=0; i--){ // 반복문 i=2  i는 0보다 크거나 같을때까지 i-- 감소 
    /*
        i=2 = 5
        i=1 = 8
        i=0 = 3
    */ 
    b1[i]=i // index[i] = 385
    console.log((b1[i])*a);
}
console.log(result);




