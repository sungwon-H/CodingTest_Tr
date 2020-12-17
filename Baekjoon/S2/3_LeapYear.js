const fs = require('fs');
const leap = fs.readFileSync('./dev/stdin').toString();
if(leap>=1 && leap<=4000){  // leap의 숫자가 1보다 크거나 같고 4000보다 작거나 같을때 모두 참일때
    if(leap%4==0 && leap%100!=0 ){ // 위 if문이 참일때 실행하고 leap가 4의배수 이거나 100배수가아니면 1출력
        console.log('1');
    }else if(leap%400==0){ // 또는 leap가 400의 배수일때 1 출력
        console.log('1');
    }else{ // 거짓은 0
        console.log('0');
    }
}else{ // 거짓 
    console.log('0');
}