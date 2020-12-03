const fs = require('fs');
let input = fs.readFileSync('day-03.txt').toString('utf-8').trim().split('\n');
input.forEach(x=>x.split(""));

function findTrees(slope){
    let [x,y,trees] = [0,0,0]
    for(y;y<input.length-slope[1];){
        [x,y] = [x+slope[0],y+slope[1]]
        x>=input[0].length?x-=input[0].length:0
        input[y][x]=="#"?trees++:0;
    }
    return trees;
}

let slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]];
let [ans1,ans2] = [findTrees(slopes[1]),1]
slopes.forEach(slope=>{ans2*=findTrees(slope)})

console.log("part 1:",ans1); //230
console.log("part 2:",ans2); //9533698720