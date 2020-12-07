const fs = require('fs');
let input = fs.readFileSync('day-07.txt').toString('utf-8').split("\n");
let [output1,output2] = [["shiny gold"],["shiny gold"]];

for(i=0;i<input.length;i++){
    input[i]=input[i].replace((/ba(g|gs)(\.|\,|\s)/g),"").replace((/\s$/g),"").split(" contain ");
    for(j=0;j<1;j++){
        input[i][1] = input[i][1].split("  ");
    }
}

function findShinyGoldBags(n){
    for(h=0;h<n;h++){
        for(i=0;i<input.length;i++){
            let outerBag = input[i][0];
            let innerBag = input[i][1];
            for(j=0;j<input[i][1].length;j++){
                for(k=0;k<output1.length;k++){
                    let check = output1[k];
                    if(innerBag[j].includes(check)&&output1.includes(outerBag)==0){
                        output1.push(outerBag);
                    }
                }
            }
        }
    }
    output1.splice(0,1);
    return output1.length;
}

function findShinyGoldBagContents(){
    for(i=0;i<output2.length;i++){
        let check = output2[i];
        for(j=0;j<input.length;j++){
            if(input[j][0]===check){
                for(k=0;k<input[j][1].length;k++){
                    let l = +input[j][1][k].match(/\d/g);
                    for(l;l>0;l--){
                        output2.push(input[j][1][k].replace(/\d /g,""));
                    }
                }
            }
        }
    }
    output2.splice(0,1);
    return output2.length;
}

console.log("part 1:",findShinyGoldBags(5)); //151
console.log("part 2:",findShinyGoldBagContents()); //41559