// Desafio 1
function compareTrue(boo1, boo2) {
  // seu código aqui
  let teste = false;
  if (typeof boo1 === 'boolean' && typeof boo2 === 'boolean') {
    if (boo1 === true && boo2 === true) {
      teste = true;
      return teste;
    }
    teste = false;
    return teste;
  }
  return 'erro: parâmetros devem ser true ou false.';
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let areaDoTriangulo = 0;
  if (typeof base === 'number' && typeof height === 'number' && base > 0 && height > 0) {
    areaDoTriangulo = (base * height) / 2;
    return areaDoTriangulo;
  }
  return 'erro: insira dois números positivos.';
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let sentenceArray = [];
  if (typeof string === 'string') {
    sentenceArray = string.split(' ');
    return sentenceArray;
  }
  return 'erro: parâmetro deve ser um texto.';
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let arrayStrings = [];
  arrayStrings.push(array[array.length - 1]);
  arrayStrings.push(array[0]);
  return arrayStrings[0] + ', ' + arrayStrings[1];
}

// Desafio 5
function footballPoints(win, ties) {
  // seu código aqui
  let points = 0;
  if (Number.isInteger(win) && Number.isInteger(ties) && win >= 0 && ties >= 0) {
    points += (win * 3);
    points += (ties);
    return points;
  }
  return 'only positive integers allowed.';
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let highNum = numbers[0];
  let numberCount = 0;
  for (let n of numbers) {
    if (n > highNum) {
      highNum = n;
    }
  }
  for (let n of numbers) {
    if (n === highNum) {
      numberCount += 1;
    }
  }
  return numberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let result = '';
  if (distCat1 < distCat2) {
    result = 'cat1';
  } else if (distCat1 > distCat2) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 3 === 0) {
      array[i] = 'fizz';
    } else if (array[i] % 5 === 0) {
      array[i] = 'buzz';
    } else {
      array[i] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let stringArray = string.split('');
  let encodedString = [];
  for (let i in stringArray) {
    switch(stringArray[i]) {
      case 'a':
        encodedString.push('1');
        break;
      case 'e':
        encodedString.push('2');
        break;
      case 'i':
        encodedString.push('3');
        break;
      case 'o':
        encodedString.push('4');
        break;
      case 'u':
        encodedString.push('5');
        break;
      default:
        encodedString.push(stringArray[i]);
    }
  }
  return encodedString.join('');
}

function decode(string) {
  // seu código aqui
  let stringArray = string.split('');
  let encodedString = [];
  for (let i in stringArray) {
    switch(stringArray[i]) {
      case '1':
        encodedString.push('a');
        break;
      case '2':
        encodedString.push('e');
        break;
      case '3':
        encodedString.push('i');
        break;
      case '4':
        encodedString.push('o');
        break;
      case '5':
        encodedString.push('u');
        break;
      default:
        encodedString.push(stringArray[i]);
    }
  }
  return encodedString.join('');
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let lista = [];
  tech.sort();
  if (Array.isArray(tech) && tech.length != 0) {
    for (let i in tech) {
      lista.push({'tech': tech[i], name: name});
    }
  }
  return lista;
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
