let inputString = "1 cachaça, 5 cervejas e 1 copo de vinho";

let numberExtract = inputString.match(/\d+/g).map(Number);
let sum = 0;
let outputString = "";

console.log(numberExtract);

for (index in numberExtract){
    sum += numberExtract[index];
}

outputString = sum + " copos de água"

console.log(outputString);