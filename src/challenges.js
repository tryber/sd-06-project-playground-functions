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
    return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui
    cat1pos = cat1 - mouse;
    cat2pos = cat2 - mouse;

    if (cat1pos < cat2pos) {
        console.log("O cat1 está mais perto do rato");
        return cat1;
    } else if (cat2pos < cat1pos) {
        console.log("O cat2 está mais perto do rato");
        return cat2;
    } else {
        console.log("Os gatos trombam e o rato foge.");
        return "Os gatos trombam e o rato foge.";
    }
}

// Desafio 8
function fizzBuzz(array) {
    // seu código aqui
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            //é divisível ṕor 3
            if (array[i] % 5 === 0) {
                //é divisível pelos dois
                console.log(fizzBuzz);
            }
        } else if (array[i] % 5 === 0) {
            //é divisível por 5
            console.log("buzz");
        } else {
            console.log("bug!");
        }
    }
}
fizzBuzz[[2, 15, 7, 9, 45]]

// Desafio 9
function encode(string) {
    // seu código aqui
    // transforma a string em array. Vira 'frase'
    let frase = string.split("");

    // troca as letras
    for (let i = 0; i < frase.length; i++) {
        switch (frase[i]) {
            case "a":
                frase[i] = "1";
                break;
            case "e":
                frase[i] = "2";
                break;
            case "i":
                frase[i] = "3";
                break;
            case "o":
                frase[i] = "4";
                break;
            case "u":
                frase[i] = "5";
                break;
            default:
        }
    }
    //junta de novo (o contrario de split)
    frase = frase.join("");
    console.log(frase)
    return frase;
}

function decode(string) {
    // seu código aqui
    // transforma a string em array. Vira 'frase'
    let frase = string.split("");

    // troca as letras
    for (let i = 0; i < frase.length; i++) {
        switch (frase[i]) {
            case "1":
                frase[i] = "a";
                break;
            case "2":
                frase[i] = "e";
                break;
            case "3":
                frase[i] = "i";
                break;
            case "4":
                frase[i] = "o";
                break;
            case "5":
                frase[i] = "u";
                break;
            default:
        }
    }
    //junta de novo (o contrario de split)
    frase = frase.join("");
    console.log(frase)
    return frase;
}

// Desafio 10
function techList(array, name) {
    //sorting
    let sortedArray = array.sort();

    // seu código aqui
    let objects = [];
    for (let i = 0; i < sortedArray.length; i++) {
        objects[i] = {
            tech: sortedArray[i],
            nome: name,
        }
    }
    console.log(objects.sort());
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Ricardo");

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