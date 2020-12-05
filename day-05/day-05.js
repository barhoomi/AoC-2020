const fs = require('fs');
let input = fs.readFileSync('day-05.txt').toString('utf-8').split('\n');
let list = [];
for(i=0;i<input.length;i++){
    let row = input[i].match(/[FB]{7}/)+"";
    let column = input[i].match(/[LR]{3}/)+"";
    let[min1,max1,min2,max2]=[0,127,0,7]
    for(j=0;j<row.length;j++){
        row[j]=="B"?min1=(max1+min1)/2:max1=(max1+min1)/2;
    }
    for(j=0;j<column.length;j++){
        column[j]=="R"?min2=(max2+min2)/2:max2=(max2+min2)/2;
    }
    [row,column]=[Math.round(min1/2+max1/2),Math.round(min2/2+max2/2)]
    list.push(row*8+column);
}
list = list.sort(function(a, b){return a-b})
let highest = list[list.length-1]
let free = 0;
for(i=0;i<list.length-1;i++){
    list[i+1]-list[i]!==1?free=(list[i]+1):0
}
console.log("part 1:",highest) //994
console.log("part 2:",free) //741