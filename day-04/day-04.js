const fs = require('fs');
let input = fs.readFileSync('day-04.txt').toString('utf-8').split(/\n/).join(" ").split(/\s\s/);
let [ans1,ans2]=[0,0];

const check1 = [/byr/g,/iyr/g,/eyr/g,/hgt/g,/hcl/g,/ecl/g,/pid/g];
const check2 = [
    /byr:(19[2-8][0-9]|199[0-9]|200[0-2])(\s|\n|$)/g, 
    /iyr:(201[0-9]|2020)(\s|\n|$)/g, 
    /eyr:(202[0-9]|2030)(\s|\n|$)/g, 
    /(hgt:(59|6[0-9]|7[0-6])in(\s|\n|$))|(hgt:(1[5-8][0-9]|19[0-3])cm(\s|\n|$))/g, 
    /hcl:#[a-f\d]{6}(\s|\n|$)/g, 
    /(ecl:(amb|blu|brn|gry|grn|hzl|oth))(\s|\n|$)/g, 
    /pid:\d{9}(\s|\n|$)/g
]

input.forEach(o=>{
    let [total1,total2] = [0,0];
    for(j=0;j<7;j++){
        total1+=(o.match(check1[j])!==null)
        total2+=(o.match(check2[j])!==null)
    }
    total1==7?ans1++:0;
    total2==7?ans2++:0;
})

console.log("part 1:",ans1); //250
console.log("part 2:",ans2); //158