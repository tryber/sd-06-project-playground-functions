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
    let result = 1
    result = (base * height) / 2

    return (result)


}
console.log(calcArea(10, 20))

// Desafio 3
function splitSentence(string) {
    // seu código aqui


    return string.split("");



}
console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(array) {

    let stringConcatenada = "";
    stringConcatenada = array[array.length - 1] + " " + array[0];



    return stringConcatenada;
}
console.log(concatName(["elisa", "de freitas", "libanio", "amor", "paixao"]));

// Desafio 5
function footballPoints(wins, ties) {
    // seu código aqui

    let result = (wins * 3) + (ties);


    return "O seu time fez " + result + " pontos ";
}
console.log(footballPoints(3, 4))

// Desafio 6

let arrayDeNumeros = [32, 45, 28, 10, 15, 45];
var maior = 1000;

function highestCount(arrayDeNumeros) {
    let maiorNumero = retornaMaiorNumeroDoArray;
    let maiorNumeroContador = retornaVezesNumeroNoarray

    return maiorNumeroContador
}


function returnHighestNumberCount(maiorNumero, arrayDeNumeros) {

    for (let index = 0; index < arrayDeNumeros.length; index = index + 1) {


        if (arrayDeNumeros[index] < maior) {

            maior = arrayDeNumeros[index];



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