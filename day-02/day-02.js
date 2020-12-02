const fs = require('fs')
let input = fs.readFileSync('day-02.txt').toString('utf-8').trim().split('\n');

let [total,total2] = [0,0];
for(i=0;i<input.length;i++){
    let n = input[i].split(":");
    let char = n[0].substring(n[0].length - 1, n[0].length);
    n[0] = n[0].slice(0, -1).split("-").map(x=>Number(x));
    n[0].push(char);
    n[1] = n[1].substring(1);
    let [min,max,str,res1,res2] = [n[0][0],n[0][1],n[1],0,0];
    char = n[0][2]
    re = new RegExp(char,'g');
    output = str.match(re);
    output != null && output.length>=min && output.length<=max?total++:0;
    str[min-1]==char?res1=1:0;
    str[max-1]==char?res2=1:0;
    res1+res2==1?total2++:0;
}
console.log("part 1:",total);
console.log("part 2:",total2);