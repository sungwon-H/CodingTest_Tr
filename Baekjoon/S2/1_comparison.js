const fs = require('fs');
const cpri = fs.readFileSync('./dev/stdin').toString().split(' ');
const a = parseInt(cpri[0]); // 1 
const b = parseInt(cpri[1]); // 2 
   if(a>b){
       console.log('>');
   }else if(a<b){
        console.log('<');
   }else if (a==b){
       console.log('==')
   }

