// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else if (value1 === false || value2 === false) {
    return false;
  }
} console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
} 
console.log(calcArea(10, 10));
 
// Desafio 3
function splitSentence(string) {
  return string.split(" ");  
} 
console.log(splitSentence("Hello World"));

// Desafio 4
function concatName(recebeArray) {
  return recebeArray[recebeArray.length -1] + ", " + recebeArray[0];
} 
console.log(concatName(nomes = ["Ana", "Jean", "Pedro", "Maria", "Joao"]));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = (wins * 3) + (ties * 1);
  return totalPontos;
}
console.log(footballPoints(10, 5));

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

console.log(highestCount(array = [9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    let = result = "Cat1";
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    result = "cat2";
  } else if (Math.abs(mouse - cat2) == Math.abs(mouse - cat1)) {
    result = "os gatos trombam e o rato foge";
  }return result;
}
console.log(catAndMouse(10, -2, -7))

// Desafio 8
function fizzBuzz(numbers) {
  
//  let array = [];

//    for (let i = 0; i < numbers.length; i += 1) {
//
//        if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
//            array.push("fizzbuzz");
//        } 
//        else if (numbers[i] % 3 === 0) {
//            array.push("fizz");
//        }
//        else if (numbers[i] % 5 === 0) {
//            array.push("buzz");
//        }
//        else {
//            array.push("bug!");
//        }
//    } 
//    return array;
}
//console.log(fizzBuzz(arr = [2, 15, 7, 9, 45]));


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
