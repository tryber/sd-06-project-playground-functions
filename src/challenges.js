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
    stringConcatenada = arrayDeString[arrayDeString.length - 1] + " " + arrayDeString[0];



    return stringConcatenada;

}

// Desafio 5
function footballPoints() {
    // seu código aqui
}

// Desafio 6
function highestCount() {
    // seu código aqui
}

// Desafio 7
function catAndMouse() {
    // seu código aqui
}

// Desafio 8
function fizzBuzz() {
    // seu código aqui
}

// Desafio 9
function encode() {
    // seu código aqui
}

function decode() {
    // seu código aqui
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