// Desafio 1
function compareTrue(param1, param2) {
    // seu código aqui
    if (param1 == true && param2 == true) {
        console.log("Ambos os valores são verdadeiros!");
        return true;
    } else {
        console.log("Algum dos valores é falso!");
        return false;
    }
}

// Desafio 2
function calcArea(base, height) {
    // seu código aqui
    return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
    // seu código aqui
    array = string.split(" ");
    console.log(array);
    return array;
}

// Desafio 4
function concatName(array) {
    // seu código aqui
    resultado = array[0] + ", " + array[array.length - 1]
    console.log(resultado);
    return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
    // seu código aqui
    //retornar os pontos, vitoria = 3, empate = 1
    resultado = wins * 3 + ties;
    console.log(resultado);
    return resultado;
}

// Desafio 6
function highestCount(array) {
    // seu código aqui
    //saber qual é o maior
    let maiorNumero = array[0];
    let vezes = 1;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
            vezes = 1;
        } else if (array[i] == maiorNumero) {
            vezes += 1;
        }
    }
    console.log("O número maior é " + maiorNumero + ", que se repete " + vezes + " vezes.");
}
highestCount([9, 9, 2, 1, 9, 5, 7]);

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