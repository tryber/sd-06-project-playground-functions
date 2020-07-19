let numberArray = [1, 2, 3, 2, 4, 6, 7, 8, 9, 0, 1]

if (numberArray.length != 11){
    console.log ("Array com tamanho incorreto.")
}


for (index in numberArray){
    if (numberArray[index] < 0 || numberArray[index] > 9){
        console.log ("não é possível gerar um número de telefone com esses valores");
    }
}


let repeatedNumberCounter = 0;
for (index in numberArray){
    for (internIndex in numberArray){
        if (numberArray[index] === numberArray[internIndex]){
            repeatedNumberCounter += 1;
        }
    }
    if (repeatedNumberCounter >= 3){
        console.log("não é possível gerar um número de telefone com esses valores");
        break
    }
    repeatedNumberCounter = 0;
}

let generatedNumber = ""
for (index in numberArray){
    if (index == 0){
        generatedNumber += "(" + numberArray[index];
    } else if (index == 1){
        generatedNumber += numberArray[index] + ")";
    } else if (index == 6){
        generatedNumber += numberArray[index] + "-";
    } else {
        generatedNumber += numberArray[index];
    }
}

console.log(generatedNumber)