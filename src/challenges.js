// Desafio 1
  function compareTrue(a, b) {
    let resultado = false;
  if (a == true && b == true) {
    resultado = true;
} else {
      resultado;
  }
  return resultado;
}

console.log(compareTrue(true, true));


// Desafio 2
function calcArea(base, heigth){
  let resultado = (base * heigth) / 2;
  return resultado;
}

console.log(calcArea(5, 10));


// Desafio 3
function splitSentence(string) {
  resultado = string.split(" ");

  return resultado;
}

console.log(splitSentence("Bruna e Julia"))


// Desafio 4
function concatName(array) {
  let result 
  let primeiro = array[array.length -1]
  let segundo = array[0]

  result = primeiro + ", " + segundo
  return result

}

console.log(concatName(['Bruna', 'Franciele', 'Trybe', 'Course']))


// Desafio 5
function footballPoints(wins, ties) {
  let resultadoCamp = (wins * 3) + ties;
  return resultadoCamp
}

console.log(footballPoints(3, 2))


// Desafio 6
function highestCount(teste) {
  let maior = 0;
  let cont = 0;
  for (let i in teste) {
  if (teste[i] > maior) {
      maior = teste[i];
  }
}
for (let i in teste) {
  if (teste[i] == maior) {
      cont++;
  }
}

  return cont;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultCat1 = Math.abs (cat1 - mouse);
  let resultCat2 = Math.abs (cat2 - mouse);
  let result;

  if (resultCat1 === resultCat2) {
    result = "os gatos trombam e o rato foge";
  } else if (resultCat1 > resultCat2) {
    result = "cat2";
  } else {
    result = "cat1";
  }
  return result;
}
console.log(catAndMouse(1, 4, 22))



// Desafio 8
function fizzBuzz(array) {
  let resposta = [];
  for (let i in array) {
      if (array[i] % 3 === 0 && array[i] % 5 === 0) {
         resposta.push("fizzBuzz");
      }
      else if (array[i] % 3 === 0) {
          resposta.push("fizz");
      }
      else if (array[i] % 5 === 0) {
          resposta.push("buzz");
      }
      else {
          resposta.push("bug!");
      }
  }
  return resposta;
}
console.log(fizzBuzz([15, 5, 3, 8]))


// Desafio 9
function encode() {
  function encode(string) {
    let result = string.split('')
     for (let i = 0; i < result.length; i += 1) {
       if (result[i] === "a") {
         result[i] = "1";
       } else if (result[i] === "e") {
         result[i] = "2";
       } else if (result[i] === "i") {
         result[i] = "3";
       } else if (result[i] === "o") {
         result[i] = "4";
       } else if (result[i] === "u") {
         result[i] = "5";
       }
      }
      let abencoado = result.join('');

return abencoado
  }
  console.log(encode("Amo azul"))

  function decode(string) {
         let result = string.split('')
          for (let i = 0; i < result.length; i += 1) {
            if (result[i] === "1") {
              result[i] = "a";
            } else if (result[i] === "2") {
              result[i] = "e";
            } else if (result[i] === "3") {
              result[i] = "i";
            } else if (result[i] === "4") {
              result[i] = "o";
            } else if (result[i] === "5") {
              result[i] = "u";
            }
           }
           let abencoado = result.join('');
   
   return abencoado
       }
       console.log(decode("Am4 1z5l"))

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
