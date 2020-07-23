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
    resultado = array[array.length - 1] + ", " + array[0];
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
    let catpos1;
    let catpos2;

    // posição cat1
    if (cat1 > mouse) {
        catpos1 = cat1 - mouse;
    } else {
        catpos1 = mouse - cat1;
    }

    // posição cat2
    if (cat2 > mouse) {
        catpos2 = cat2 - mouse;
    } else {
        catpos2 = mouse - cat2;
    }

    if (catpos1 < catpos2) {
        // cat1 mais perto do rato
        console.log("Cat1 pegou o rato!");
        return "cat1";
    } else if (catpos2 < catpos1) {
        // cat2 mais perto
        console.log("Cat2 pegou o rato!");
        return "cat2";
    } else {
        // mesma distância
        console.log("os gatos trombam e o rato foge");
        return "os gatos trombam e o rato foge";
    }
}
//catAndMouse(1, -4, -2);

// Desafio 8
function fizzBuzz(array) {
    // seu código aqui
    let resposta = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            //é divisível ṕor 3
            if (array[i] % 5 === 0) {
                //é divisível pelos dois
                resposta[i] = "fizzBuzz";
            } else {
                resposta[i] = "fizz";
            }
        } else if (array[i] % 5 === 0) {
            //é divisível por 5
            resposta[i] = "buzz";
        } else {
            // não é divisível por nenhum deles
            resposta[i] = "bug!";
        }
    }
    return resposta;
}
//fizzBuzz([2, 15, 7, 9, 45]);

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
    if (array.length < 1) {
        console.log("Vazio!");
        return "Vazio!";
    } else {
        //sorting
        let sortedArray = array.sort();

        // seu código aqui.
        let objects = [];
        for (let i = 0; i < sortedArray.length; i++) {
            objects[i] = {
                tech: sortedArray[i],
                name: name,
            }
        }
        console.log(objects);
        return objects;
    }
}
//techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Ricardo");

// Desafio 11
function generatePhoneNumber(param) {
    // seu código aqui
    if (param.length !== 11) {
        return "Array com tamanho incorreto.";
    } else {

        for (let i = 0; i < param.length; i++) {

            if (param[i] < 0 || param[i] > 9) {
                return "não é possível gerar um número de telefone com esses valores";
            }

            let numTimes = 1;
            for (let j = 0; j < param.length; j++) {

                if (i === j) {

                } else {

                    if (param[j] == param[i]) {
                        numTimes += 1;
                    }

                }

            } // for interno

            if (numTimes >= 3) {
                return "não é possível gerar um número de telefone com esses valores";
            }


        } // for externo 

        let fullNumber = "(" + param[0] + param[1] + ") " + param[2] + param[3] + param[4] + param[5] + param[6] + "-" + param[7] + param[8] + param[9] + param[10];
        console.log(fullNumber);
        return fullNumber;
    } //else
} //function
//generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    // seu código aqui
    if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) && lineB < lineC + lineA && lineB > Math.abs(lineC - lineA) && lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {

        console.log(lineA + " é menor que " + (lineB + lineC) + " e maior que o módulo de " + (lineB - lineC) + ".");

        console.log(lineB + " é menor que " + (lineC + lineA) + " e maior que o módulo de " + (lineC - lineA) + ".");

        console.log(lineC + " é menor que " + (lineA + lineB) + " e maior que o módulo de " + (lineA - lineB) + ".");

        console.log("É um triângulo");
    } else {
        console.log("Não é um triângulo");
    }
}
triangleCheck(10, 14, 8);

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