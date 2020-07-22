// Projeto - Ricardo Ribeiro

// ------------- Desafio 1

function compareTrue(myVar1, myVar2) {
  let result = false;
  if (myVar1 && myVar2) {
    result = true;
  }
  return result
}
// let var1 = false;
// let var2 = true;
// console.log(compareTrue(var1, var2));


// -------------- Desafio 2

function calcArea(base, height) {
  let area = (base * height) / 2;
  return area
}
// let bas = 12;
// let hei = 8;
// console.log(calcArea(bas, hei));


// --------------- Desafio 3

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
// let frase = 'go Trybe';
// console.log(splitSentence(frase));


// ---------------- Desafio 4

function concatName(myName) {
  let nameConcat = myName[myName.length - 1] + ' ,' + myName[0];
  return nameConcat;
}
// let name = ['Ricardo', 'Alexandre', 'de', 'Souza', 'Ribeiro']
// console.log(concatName(name));


// --------------- Desafio 5

function footballPoints(wins, ties) {
  let points = 0;
  points = (wins * 3) + (ties * 1);
  return points;
}
// let win = 10;
// let tie = 7;
// console.log("Total de pontos: " + footballPoints(win, tie));


// --------------- Desafio 6

function verifyHighest(myArray) {
  let maior = 0;
  for (let y = 0; y < myArray.length; y += 1) {
    if ((myArray[y] > maior)) {
      maior = myArray[y];
    }
  }
  return maior;
}

function highestCount(myArray) {
  let maior = verifyHighest(myArray);
  let contMaior = 0;
  for (let i = 0; i < myArray.length; i += 1) {
    if ((myArray[i] === maior)) {
      contMaior += 1;
    }
  }
  return contMaior;
}
// let arr = [0, 4, 4, 4, 9, 2, 6];
// console.log(highestCount(arr));


// ---------- Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let result = 'os gatos trombam e o rato foge';
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  return result;
}
// let c1 = 4;
// let c2 = 8;
// let mo = 6;
// console.log(catAndMouse(mo, c1, c2));


// ---------- Desafio 8

function fizzBuzz(myArray) {
  let arrayFizzBuzz = [];
  for (let i = 0; i < myArray.length; i += 1) {
    let result = 'bug!';
    if ((myArray[i] % 3 === 0) && (myArray[i] % 5 === 0)) {
      result = 'fizzBuzz';
    } else if (myArray[i] % 3 === 0) {
      result = 'fizz';
    } else if (myArray[i] % 5 === 0) {
      result = 'buzz';
    }
    arrayFizzBuzz.push(result);
  }
  return arrayFizzBuzz;
}
// let arr = [2, 15, 7, 9, 45, 30, 60, 11];
// console.log(fizzBuzz(arr));


// Desafio 9

function encode(myTextEncode) {
  let myResult = '';
  for (let x = 0; x < myTextEncode.length; x += 1) {
    if (myTextEncode[x] === 'a') {
      myResult += '1';
    } else if (myTextEncode[x] === 'e') {
      myResult += '2';
    } else if (myTextEncode[x] === 'i') {
      myResult += '3';
    } else if (myTextEncode[x] === 'o') {
      myResult += '4';
    } else if (myTextEncode[x] === 'u') {
      myResult += '5';
    } else {
      myResult += myTextEncode[x];
    }
  }
  return myResult;
}

function decode(myText) {
  let result2 = '';
  for (let i = 0; i < myText.length; i += 1) {
    if (myText[i] === '1') {
      result2 += 'a';
    } else if (myText[i] === '2') {
      result2 += 'e';
    } else if (myText[i] === '3') {
      result2 += 'i';
    } else if (myText[i] === '4') {
      result2 += 'o';
    } else if (myText[i] === '5') {
      result2 += 'u';
    } else {
      result2 += myText[i];
    }
  }
  return result2;
}
// let text = 'hi there';
// let text2 = 'h3 th2r2';
// console.log(encode(text));
// console.log(decode(text2));


// ---------- Desafio 10

function techList(myArray, myName) {
  let arrayObj = [];
  if (myArray.length === 0) {
    arrayObj = 'Vazio!';
  } else {
    myArray.sort();
    for (let i = 0; i < myArray.length; i += 1) {
      let obj = {
        tech: myArray[i],
        name: myName,
      }
      arrayObj.push(obj);
    }
  }
  return arrayObj;
}
// let arr = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let name = "Ricardo";
// console.log(techList(arr, name));


// ------------- Desafio 11

function verifyNumber(myPhone) {
  let result = true;
  let contMaior = 0;
  for (let y = 0; y < myPhone.length; y += 1) {
    let contAtual = 0;
    for (let x = 0; x < myPhone.length; x += 1) {
      if ((myPhone[y] === myPhone[x])) {
        contAtual += 1;
      }
    }
    if (contAtual > contMaior) {
      contMaior = contAtual;
    }
  }
  for (let i = 0; i < myPhone.length; i += 1) {
    if (myPhone[i] < 0 || myPhone[i] > 9 || contMaior >= 3) {
      result = false;
    }
  }
  return result;
}
function generatePhoneNumber(myPhone) {
  let result = '';
  if (myPhone.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if (!verifyNumber(myPhone)) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = '(';
    for (let i = 0; i < 2; i += 1) {
      result += myPhone[i];
    }
    result += ') ';
    for (let i = 2; i < 7; i += 1) {
      result += myPhone[i];
    }
    result += '-';
    for (let i = 7; i < 11; i += 1) {
      result += myPhone[i];
    }
  }
  return result;
}
// let numPhone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(generatePhoneNumber(numPhone));


// ------------ Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if ((Math.abs(lineB - lineC) < lineA) && (lineB + lineC > lineA)) {
    if ((Math.abs(lineA - lineC) < lineB) && (lineA + lineC > lineB)) {
      if ((Math.abs(lineA - lineB) < lineC) && (lineA + lineB > lineC)) {
        result = true;
      }
    }
  }
  return result;
}
// let lin1 = 10;
// let lin2 = 14;
// let lin3 = 8;
// console.log(triangleCheck(lin1, lin2, lin3));


// Desafio 13

function hydrate(myText) {
  let myNumbers = myText.match(/\d+/g).map(Number);
  let sumNumbers = 0;
  for (let i = 0; i < myNumbers.length; i += 1) {
    sumNumbers += myNumbers[i];
  }
  let result = '';
  if (sumNumbers === 1) {
    result = '1 copo de água';
  } else {
    result = `${sumNumbers} copos de água`;
  }
  return result;
}
// let text = "1 cachaça, 5 cervejas e 1 copo de vinho";
// console.log(hydrate(text));


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
