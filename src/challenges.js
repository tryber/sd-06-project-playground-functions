// Projeto - Ricardo Ribeiro

// ------------- Desafio 1
// let var1 = false;
// let var2 = true;
function compareTrue(myVar1, myVar2) {
  let result = false;
  if (myVar1 && myVar2) {
    result = true;
  }
  return result
}
// console.log(compareTrue(var1, var2));


// -------------- Desafio 2
// let bas = 12;
// let hei = 8;
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area
}
// console.log(calcArea(bas, hei));


// --------------- Desafio 3
// let frase = 'go Trybe';
function splitSentence(myText) {
  let word = '';
  let fraseSeparada = [];
  for (let i = 0; i < myText.length; i += 1) {
    if (myText[i] !== ' ') {
      word += myText[i];
    } else {
      fraseSeparada.push(word);
      word = '';
    }
  }
  // inclui a ultima palavra
  fraseSeparada.push(word);
  return fraseSeparada;
}
// console.log(splitSentence(frase));


// ---------------- Desafio 4
// let name = ['Ricardo', 'Alexandre', 'de', 'Souza', 'Ribeiro']
function concatName(myName) {
  let nameConcat = myName[myName.length - 1] + ', ' + myName[0]
  return nameConcat
}
// console.log(concatName(name));


// --------------- Desafio 5
// let win = 10;
// let tie = 7;
function footballPoints(wins, ties) {
  let points = 0;
  points = (wins * 3) + (ties * 1);
  return points;
}
// console.log("Total de pontos: " + footballPoints(win, tie));


// --------------- Desafio 6
// let arr = [9, 1, 2, 3, 9, 5, 7, 3, 1, 3];
function highestCount(myArray) {
  let contMaior = 1;
  for (let i = 0; i < myArray.length; i += 1) {
    let contAtual = 1;
    for (let x = 0; x < myArray.length; x += 1) {
      if ((i != x) && (myArray[i] === myArray[x])) {
        contAtual += 1;
      }
    }
    if (contAtual > contMaior) {
      contMaior = contAtual;
    }
  }
  return contMaior;
}
// console.log("Maior quantidade de vezes: " + highestCount(arr));


// ---------- Desafio 7
// let c1 = 4;
// let c2 = 8;
// let mo = 6;
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// console.log(catAndMouse(mo, c1, c2));

// ---------- Desafio 8
// let arr = [2, 15, 7, 9, 45];
function fizzBuzz(myArray) {
  let arrayFizzBuzz = [];
  for (i = 0; i < myArray.length; i +=1) {
    let result = "";
    if ((myArray[i] % 3 == 0) && (myArray[i] % 5 == 0)){
      result = "fizzBuzz";
    } else if (myArray[i] % 3 == 0) {
      result = "fizz";
    } else if (myArray[i] % 5 == 0) {
      result = "buzz";
    } else {
      result = "bug!";
    }
    arrayFizzBuzz.push(result);
  }
  return arrayFizzBuzz;
}
// console.log(fizzBuzz(arr));


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
