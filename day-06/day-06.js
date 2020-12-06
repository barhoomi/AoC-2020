const fs = require('fs');
let input = fs.readFileSync('day-06.txt').toString('utf-8').split(/\n/).join(" ").split(/\s\s/);
let [output1,output2,total1,total2] = [[],[],0,0];
for(i=0;i<input.length;i++){
    output1=[];
    for(j=0;j<input[i].length;j++){
        (output1.includes(input[i][j])||input[i][j]==0)?0:output1.push(input[i][j]);
    }
    total1 += output1.length;
}
for(i=0;i<input.length;i++){
    let groupSize = (input[i].match((/\s|\n|$/g) || []).length);
    output2 = [];
    for(j=0;j<input[i].length;j++){
        let re = new RegExp(input[i][j], "g");
        let n = (input[i].match(re || []).length);
        n!==groupSize||output2.includes(input[i][j])?0:output2.push(input[i][j]);
    }
    total2+=output2.length;
}
console.log("part 1:",total1); //6885
console.log("part 2:",total2); //3550