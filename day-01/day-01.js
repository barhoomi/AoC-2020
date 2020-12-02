const fs = require('fs')
let input = fs.readFileSync('day-01.txt').toString('utf-8').trim().split(/\s/g).map(x=>+x);
let [answer1,answer2] = [0,0];

for(i=0;i<input.length;i++){
    for(j=0;j<input.length;j++){
        input[i]+input[j]==2020?answer1=input[i]*input[j]:0
        for(k=0;k<input.length;k++){
            input[i]+input[j]+input[k]==2020?answer2=input[i]*input[j]*input[k]:0
        }
    }
}

console.log("part 1:",answer1);
console.log("part 2:",answer2);