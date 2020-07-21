// Desafio 1 //iniciando
function compareTrue(num1, num2) {
  // seu código aqui
  if(num1 === true && num2 === true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return(base * height) /2;

}

// Desafio 3
function splitSentence(separador) {
let strArray = [];
let novoArray = "";

for (let i = 0; i <= input.length; i += 1) {
  if (separador[i] === " " || i === separador.length) {
    strArray.push(novoArray);
    novoArray = "";
  } else {
    novoArray += separador[i];  
  }
}
return strArray;
}




// Desafio 4
function concatName(primeiroUltimo) {
  let newString = primeiroUltimo[primeiroUltimo.length - 1] + ', ' + primeiroUltimo[0];

  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  for(let i = 0; i< array.lenght; i+=1){
    return maiorNumero
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let distanciaPrimeiro = mouse - cat1;
let distanciaSegundo = mouse - cat2;
  if(distanciaPrimeiro < distanciaSegundo){
    return "cat1";
  } else if (distanciaSegundo === distanciaPrimeiro){
    return "os gatos trombam e o rato foge";
  } else {
    return "cat2";
  }
}

// Desafio 8

function fizzBuzz(numerosArray) {
  // seu código aqui 
  let strArray = [];

  for (let i = 0; i < numerosArray.length; i += 1) {
    if (numerosArray[i] % 15 === 0){
      strArray.push("fizzBuzz");
    } else if (numerosArray[i] % 3 === 0) {
      strArray.push("fizz");
    } else if (numerosArray[i] % 5 === 0) {
      strArray.push("buzz");
    } else {
      strArray.push("bug!");
    }
  }
  return strArray;
} console.log(fizzBuzz([2, 8, 15, 90, 25]));

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
function generatePhoneNumber(arrayDeNumeros) {
  let cel = 0;
  let lista = arrayDeNumeros.sort();
  let repetidos = 0;
  for(let i = 0; i < lista.lenght; i++){
    if(lista[i] === lista[i-1]){
      repetidos += 1;
    }
  }
  if(arrayDeNumeros !== 11){
    return "tamanho incorreto";
  } else if (repetidos > 2){
    return "nao e possivel gerar um numero com esses valores";
  } else {
    for(let j = 0; j < arrayDeNumeros.lenght; j++){
      if(arrayDeNumeros[j]<0 || arrayDeNumeros[j>9]){
        return "nao e possivel geral um numero de telefone com esses valores";
      }
    }
  } 
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
