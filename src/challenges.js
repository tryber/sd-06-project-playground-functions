// Desafio 1
function compareTrue(value1, value2) {
    //booleano simples
    return value1 && value2;
}
//console.log(compareTrue(2, 2))
// Desafio 2
function calcArea(base, altura) {
    //fazer a conta
    let result = ((base * altura) / 2);
    return result;
}
//console.log(calcArea(3, 2))
// Desafio 3
function splitSentence(sentence) {
    //usar function split
    divisao = sentence.split(' ');
    return divisao;
}
//console.log(splitSentence("hello world"))
// Desafio 4
function concatName(nomesConcatenados) {
    // criar const com o ultimo 
    let palavra1 = nomesConcatenados[nomesConcatenados.length - 1]
        //criar const para receber o elemento do array e concatenar com o primeiro elemento do array
    let resultado = palavra1 + ", " + nomesConcatenados[0]
    return resultado
}
let array = ["asda", "qweqweq", "zxczxc", "poipo"]
    //console.log(concatName(array))

// Desafio 5
function footballPoints(wins, ties) {
    // definir variavel que vai receber o numero de pontos
    let campeonato = 0
        //definir pontuação
        //ties = 1 ponto
        //wins = 3 pontos
    campeonato = ties + (3 * wins)
        //retornar pontos
    return campeonato
}
//console.log(footballPoints(1, 2))

// Desafio 6
function highestCount(numbers) {
    let freq = 0
    let biggerNumber = numbers[0]
        // criar iteração para percorrer array
    for (let index = 0; index < numbers.length; index++) {
        //criar condição de parada
        //se o maior numero for maior que numero de indice x
        if (biggerNumber < numbers[index]) {
            //condição de parada
            biggerNumber = numbers[index]

        }
    }
    // percorrendo o array de numeros para encontrar a frequencia
    for (let indice = 0; indice < numbers.length; indice++) {
        if (biggerNumber === numbers[indice]) {
            // condição para contagem de frequencia
            freq = freq + 1
        }
    }
    //retornar contagem
    return freq
}
//let entrada = [1, 2, 3, 5, 5, 5, 5]
//console.log(highestCount(entrada))


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    /*let distCatMouse1 = Math.abs(cat1 - mouse);
    let distCatMouse2 = Math.abs(cat2 - mouse);*/

    if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
        console.log(Math.abs(cat2 - mouse));
        return "cat2";
    } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
        console.log(Math.abs(cat1 - mouse));
        return "cat1";
    } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
        console.log(Math.abs(cat1 - mouse) + "," + Math.abs(cat2 - mouse));
        return 'os gatos trombam e o rato foge';
    }
}
console.log(catAndMouse(1, 0, 2))

// Desafio 8
function fizzBuzz(sequel) {
    //determinar array vazia
    let fizzBuzzArray = []
        //criar for in ou for 
    for (let position in sequel) {
        //condições de inserção de fizz, buzz e bug!
        if (sequel[position] % 3 === 0 && sequel[position] % 5 === 0) {
            fizzBuzzArray.push("fizzBuzz");
        } else if (sequel[position] % 3 === 0) {
            fizzBuzzArray.push("fizz");
        } else if (sequel[position] % 5 === 0) {
            fizzBuzzArray.push("buzz");
        } else {
            fizzBuzzArray.push("bug!");
        }
    }
    return fizzBuzzArray;
}

console.log(fizzBuzz([9, 25]))

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