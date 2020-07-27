// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else if (value1 === false || value2 === false) {
    return false;
  }
} //console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}
//console.log(calcArea(2, 10));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
//console.log(splitSentence('Hello World'));

// Desafio 4
function concatName(recebeArray) {
  return recebeArray[recebeArray.length -1] + ', ' + recebeArray[0];
}
//console.log(concatName(nomes = ["Ana", "Jean", "Pedro", "Maria", "Joao"]));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = (wins * 3) + (ties * 1);
  return totalPontos;
}
//console.log(footballPoints(10, 5));

// Desafio 6
function highestCount(numeros) {

  let numeroMaisAlto = numeros[0];
  let count = 0;

  for (let i = 0; i < numeros.length; i += 1) {
          if (numeros[i] > numeroMaisAlto) {
              numeroMaisAlto = numeros[i];
          }
      }

  for (let index = 0; index < numeros.length; index += 1) {
      if (numeroMaisAlto == numeros[index]) {
          count += 1;
      }
  }
  return count;
}
//console.log(highestCount(array = [9, 1, 2, 3, 9, 5, 7, 9]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2){
  let result = '';
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    result = "cat1";
  }
  else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    result = "cat2";
  }
  else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
//console.log(catAndMouse(10, 4, 22));

// Desafio 8
function fizzBuzz(numbers){
  let array = [];

    for (let i = 0; i < numbers.length; i += 1) {

        if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
            array.push("fizzBuzz");
        }
        else if (numbers[i] % 3 === 0) {
            array.push("fizz");
        }
        else if (numbers[i] % 5 === 0) {
            array.push("buzz");
        }
        else {
            array.push("bug!");
        }
    }
    return array;
}
//console.log(fizzBuzz(arr = [7, 9]));

// Desafio 9
function encode(nameNumber) {
  let nome = "";
    for (let i = 0; i < nameNumber.length; i += 1 ) {
        nome = nome + nameNumber[i].replace(/a/g, 1)
        .replace(/e/gi, 2).replace(/i/gi, 3).replace(/o/gi, 4).replace(/u/gi, 5);
    }
    return nome;
}
//console.log(encode("Jean Victor Machado Pelais u"));

function decode(numberName) {
  let number = ""
    for (let i = 0; i < numberName.length; i += 1 ) {
      number = number + numberName[i].replace(/1/g, "a")
      .replace(/2/gi, "e").replace(/3/gi, "i").replace(/4/gi, "o").replace(/5/gi, "u");
    }
    return number;
}
//console.log(decode("J21n V3ct4r M1ch1d4 P2l13s 5"));

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
