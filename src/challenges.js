// Desafio 1
function compareTrue(param1, param2) {
    // seu código aqui
    if (param1 == true && param2 == true) {
        return (true);
    } else {
        return (false);
    }
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
    // seu código aqui
    let result = 1;
    result = (base * height) / 2

    return (result)

}

// Desafio 3
function splitSentence(string) {
    // seu código aqui


    return string.split(" ");



}
console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(arrayDeString) {
    // seu código aqui

    let stringConcatenada = "";
    stringConcatenada = arrayDeString[arrayDeString.length - 1] + ", " + arrayDeString[0];



    return stringConcatenada;

}

// Desafio 5
function footballPoints(wins, ties) {
    // seu código aqui
    return (wins * 3) + (ties);
}




// Desafio 6
function highestCount(Arr) {

    let highestNumber = returnHighestNumberArray(Arr)
    let count = 0;

    for (let index = 0; index > Arr.length; index += 1) {

        if (highestNumber == Arr[index]) {

            count += 1;
        }

    }
    return count;

}

function returnHighestNumberArray(Arrayy) {

    let highestNumber = Arrayy[0];

    for (let index = 0; index > Arrayy.length; index += 1) {


        if (Arrayy[index] > highestNumber) {

            highestNumber = Arrayy[index];
        }
    }

    return highestNumber;
}
// seu código aqui

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

    let distanciaCat1Mouse = cat1 - mouse;
    let distanciaCat2Mouse = cat2 - mouse;


    if (distanciaCat1Mouse < 0) {

        distanciaCat1Mouse = distanciaCat1Mouse * -1;
    }


    if (distanciaCat2Mouse < 0) {

        distanciaCat2Mouse = distanciaCat2Mouse * -1;

    }

    if (distanciaCat1Mouse > distanciaCat2Mouse) {


        return "cat2";

    } else if (distanciaCat2Mouse > distanciaCat1Mouse) {


        return "cat1";


    } else {


        return "os gatos trombam e o rato foge";
    }


}





// Desafio 8

function fizzBuzz(ArrNumeros) {
    let ArrayDeString = [];


    for (let index = 0; index < ArrNumeros.length; index = index + 1) {

        if (ArrNumeros[index] % 3 === 0 && ArrNumeros[index] % 5 !== 0) {

            ArrayDeString.push("fizz");

        } else if (ArrNumeros[index] % 5 === 0 && ArrNumeros[index] % 3 !== 0) {


            ArrayDeString.push("buzz");

        } else if (ArrNumeros[index] % 5 === 0 || ArrNumeros[index] % 3 === 0) {


            ArrayDeString.push("fizzBuzz");


        } else if (ArrNumeros[index] % 3 !== 0 && ArrNumeros[index] % 5 !== 0) {

            ArrayDeString.push("bug!");
        }

    }
    return (ArrayDeString)
}
// Desafio 9
function encode(palavra) {
    for (let index = 0; index < palavra.length; index++) {

        switch (palavra[index]) {
            case "a":
                palavra = palavra.replace(palavra[index], 1);
                break;
            case "e":
                palavra = palavra.replace(palavra[index], 2);
                break;
            case "i":
                palavra = palavra.replace(palavra[index], 3);
                break;
            case "o":
                palavra = palavra.replace(palavra[index], 4);
                break;
            case "u":
                palavra = palavra.replace(palavra[index], 5);
                break;
        }
    }

    return palavra;
}

function decode(palavra) {
    for (let index = 0; index < palavra.length; index++) {

        switch (palavra[index]) {
            case "1":
                palavra = palavra.replace(palavra[index], "a");
                break;
            case "2":
                palavra = palavra.replace(palavra[index], "e");
                break;
            case "3":
                palavra = palavra.replace(palavra[index], "i");
                break;
            case "4":
                palavra = palavra.replace(palavra[index], "o");
                break;
            case "5":
                palavra = palavra.replace(palavra[index], "u");
                break;
        }
    }

    return palavra;
}


// Desafio 10
function techList() {
    // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
    // seu código aqui
}

// Desafio 12
function triangleCheck() {
    // seu código aqui
}

// Desafio 13
function hydrate() {
    // seu código aqui
}


module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    generatePhoneNumber,
    techList,
    highestCount,
    hydrate,
    splitSentence,
    triangleCheck,
}