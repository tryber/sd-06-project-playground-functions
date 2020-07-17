// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } else {
    return false;
  }
}
//console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}
//console.log(calcArea(10, 5));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
//console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(lista) {
  return lista[lista.length - 1] + ', ' + lista[0];
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties);
  return points;
}
//console.log(footballPoints(3, 1));

// Desafio 6
function highestCount(list) {
  let greater = list[0];  
  for (let i of list) {
    if (i > greater) {
      greater = i;
    }
  }
  let count = 0;
  for (let i of list) {
    if (i === greater) {
      count += 1;
    }
  }
  return count;
}
// let numbers = [9, 1, 2, 3, 9, 5, 7];
// console.log(highestCount(numbers));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 > distCat2) {
    return 'cat2';
  } else if (distCat1 < distCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
//console.log(catAndMouse(1, 2, 3));

// Desafio 8
function fizzBuzz(list) {
  let newList = [];
  for (let i in list) {
    if ((list[i] % 3) === 0 && (list[i] % 5) === 0) {
      newList[i] = 'fizzBuzz';
    } else if ((list[i] % 3) === 0) {
      newList[i] = 'fizz';
    } else if ((list[i] % 5) === 0) {
      newList[i] = 'buzz';
    } else {
      newList[i] = 'bug!';
    }
  }
  return newList;
}
// let numbers = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(numbers));

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
  //seu código aqui
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
