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
let novoArray = '';

for (let i = 0; i <= input.length; i += 1) {
  if (separador[i] === ' ' || i === separador.length) {
    strArray.push(novoArray);
    novoArray = '';
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
let distanciaPrimeiro = Math.abs(mouse - cat1);
let distanciaSegundo = Math.abs(mouse - cat2);
  if(distanciaPrimeiro < distanciaSegundo){
    return 'cat2';
  } else if (distanciaSegundo === distanciaPrimeiro){
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat1';
  }
}


// Desafio 8

function fizzBuzz(numerosArray) {
  // seu código aqui 
  let strArray = [];

  for (let i = 0; i < numerosArray.length; i += 1) {
    if (numerosArray[i] % 15 === 0){
      strArray.push('fizzBuzz');
    } else if (numerosArray[i] % 3 === 0) {
      strArray.push('fizz');
    } else if (numerosArray[i] % 5 === 0) {
      strArray.push('buzz');
    } else {
      strArray.push('bug!');
    }
  }
  return strArray;
} console.log(fizzBuzz([2, 8, 15, 90, 25]));

// Desafio 9
function encode(string) {
// seu código aqui 
  let newString = '';

  for (let char in string) {
    if (string[char] === 'a') {
      newString += '1';
    } else if (string[char] === 'e') {
      newString += '2';
    } else if (string[char] === 'i') {
      newString += '3';
    } else if (string[char] === 'o') {
      newString += '4';
    } else if (string[char] === 'u') {
      newString += '5';
    } else {
      newString += string[char];
    }
  }

  return newString;
}

function decode(string) {
// seu código aqui 
  let newString = '';

  for (let char in string) {
    if (string[char] === '1') {
      newString += 'a';
    } else if (string[char] === '2') {
      newString += 'e';
    } else if (string[char] === '3') {
      newString += 'i';
    } else if (string[char] === '4') {
      newString += 'o';
    } else if (string[char] === '5') {
      newString += 'u';
    } else {
      newString += string[char];
    }
  }

  return newString;
}console.log(decode())

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(arrayDeNumeros) {
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

