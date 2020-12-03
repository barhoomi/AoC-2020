const fs = require('fs');
const { totalmem } = require('os');
let input = fs.readFileSync('day-03.txt').toString('utf-8').trim().split('\n');
for(i=0;i<input.length;i++){
    input[i] = input[i].split("");
}

let slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]] //right,down
let [ans1,ans2] = [0,1];

function findTrees(slope){
    let currentPos = {x:0,y:0};
    let trees = 0;
    for(currentPos.y;currentPos.y<input.length-slope[1];){
        currentPos.x+=slope[0];
        currentPos.y+=slope[1];
        if(currentPos.x>=input[0].length){
            currentPos.x-=input[0].length;
        }
        input[currentPos.y][currentPos.x]=="#"?trees++:0;
    }
    return trees;
}

ans1 = findTrees(slopes[1]);
slopes.forEach(slope=>{ans2*=findTrees(slope)})

console.log("part 1:",ans1);
console.log("part 2:",ans2);