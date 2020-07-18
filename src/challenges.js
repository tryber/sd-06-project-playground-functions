// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  if (val1 === true && val2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
   let array = frase.split(' ');
  return array;
}

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  let nomesConcat = nomes[nomes.length - 1] + ', ' + nomes[0];
  return nomesConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let puntosWins = wins * 3;
  let puntosTotales = ties + puntosWins;
  return puntosTotales;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let numMaior = 0;
  let contador = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > numMaior) {
      numMaior = numeros[i];
    }
  }
  for (let e = 0; e < numeros.length; e += 1) {
    if (numeros[e] === numMaior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let contadorCat1 = 0;
  let contadorCat2 = 0;
  if (mouse > cat1) {
    for (let i = cat1; i <= mouse; i += 1) {
      contadorCat1 += 1;
    }
  }
  else {
    for (let e = mouse; e <= cat1; e += 1) {
      contadorCat1 += 1;
    }
  }
  if (mouse > cat2) {
    for (let i = cat2; i <= mouse; i += 1) {
      contadorCat2 += 1;
    }
  }
  else {
    for (let e = mouse; e <= cat2; e += 1) {
      contadorCat2 += 1;
    }
  }
  if (contadorCat1 > contadorCat2) {
    return 'cat2';
  }
  else if (contadorCat2 > contadorCat1) {
    return 'cat1';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let numDivisibles = [];
  for (let i in numeros) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      numDivisibles[i] = 'fizzBuzz';
    }
    else if (numeros[i] % 3 === 0) {
      numDivisibles[i] = 'fizz';
    }
    else if (numeros[i] % 5 === 0) {
      numDivisibles[i] = 'buzz';
    }
    else {
      numDivisibles[i] = 'bug!';
    }
  }
  return numDivisibles;
}

// Desafio 9
function encode(frase) {
  // seu código aqui
  let arrayFrase = frase.split('');
  for (let i in arrayFrase) {
    switch (arrayFrase[i]) {
      case 'a':
        arrayFrase[i] = '1';
        break;
      case 'e':
        arrayFrase[i] = '2';
        break;
      case 'i':
        arrayFrase[i] = '3';
        break;
      case 'o':
        arrayFrase[i] = '4';
        break;
      case 'u':
        arrayFrase[i] = '5';
      default:
      break;
    }
  }
  arrayFrase = arrayFrase.join('');
  return arrayFrase;
}

function decode(fraseDecode) {
  // seu código aqui
  let arrayFraseDecode = fraseDecode.split('');
  for (let i in arrayFraseDecode) {
    switch (arrayFraseDecode[i]) {
      case '1':
        arrayFraseDecode[i] = 'a';
        break;
      case '2':
        arrayFraseDecode[i] = 'e';
        break;
      case '3':
        arrayFraseDecode[i] = 'i';
        break;
      case '4':
        arrayFraseDecode[i] = 'o';
        break;
      case '5':
        arrayFraseDecode[i] = 'u';
      default:
    }
  }
  arrayFraseDecode = arrayFraseDecode.join('');
  return arrayFraseDecode;
}

// Desafio 10
function techList(arrayTecnologia, name) {
  let arrayTotal = [];
  let arrayOrdenado = arrayTecnologia.sort();
  let objeto = {};
  // seu código aqui
  if (arrayTecnologia.length === 0) {
    return 'Vazio!';
  }
  else {
    for (let i in arrayOrdenado) {
      objeto = {
        tech: arrayOrdenado[i],
        name: name,
      }
      arrayTotal[i] = objeto;
    }
    return arrayTotal;
  }
}

// Desafio 11
function generatePhoneNumber(numeros) {
  let contador = 0;
  let phoneNUmber = [];
  
 if (numeros.length !== 11) {
   return 'Array com tamanho incorreto.';
   process.exit();
  }
 for (let i in numeros) {
   if (numeros[i] < 0 || numeros[i] > 9) {
     return 'não é possível gerar um número de telefone  com esses valores';
     process.exit();
    }
    for (let e in numeros) {
      if (numeros[i] === numeros[e]) { 
        contador += 1;
      }  
    }
    if (contador > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
      process.exit();
    }
    contador = 0;
  }
  for (let i = 0; i < 15; i += 1) {
    switch (i) {
      case 0:
        phoneNUmber[0] = '(';
        break;
      case 1:
        phoneNUmber[1] = numeros[0];
        break;
      case 2:
        phoneNUmber[2] = numeros[1];
        break;
      case 3:
        phoneNUmber[3] = ')';
        break;
      case 4:
        phoneNUmber[4] = ' ';
        break;
      case 10:
        phoneNUmber[10] = '-';
        break;
      default:
        phoneNUmber[i] = numeros[i - 4];
        break;
    }
  }
  phoneNUmber = phoneNUmber.join('');
  return phoneNUmber;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(bebidas) {
  let suma = 0;
  let bebidasNumeros = 0;
  bebidas = bebidas.replace(/\D/g, "");
  bebidas = bebidas.split('');
  for (let i in bebidas) {
    bebidasNumeros = parseInt(bebidas[i]);
    suma += bebidasNumeros;
  }
  if (suma === 1) {
    return suma + ' copo de água';  
  }
  else {
    return suma + ' copos de água';
  }
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
