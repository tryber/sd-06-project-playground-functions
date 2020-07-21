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
    switch (stringArray[i]) {
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
    switch (stringArray[i]) {
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
  if (Array.isArray(tech) && tech.length !== 0) {
    for (let i in tech) {
      lista.push({ tech: tech[i], name: name });
    }
    return lista;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(number) {
  // seu código aqui
  if (number.length === 11) {
    let maxNumberCount = 0;
    let newNumber = [];
    for (let i in number) {
      let numberTest = number[i];
      let numberCount = 0;
      for (let testVerify of number) {
        if (numberTest === testVerify) {
          numberCount += 1;
        }
      }
      
      if (numberCount > maxNumberCount) {
        maxNumberCount = numberCount;
      }
      if (Math.sign(numberTest) !== -1 && Math.sign(numberTest !== 'NaN') && numberTest <= 9 && maxNumberCount < 3) {
        switch (i) {
              case '0':
                newNumber.push('(', number[i]);
                break;
              case '1':
                newNumber.push(number[i], ')');
                break;
              case '2':
                newNumber.push(number[i]);
                break;
              case '3':
                newNumber.push(number[i]);
                break;
              case '4':
                newNumber.push(number[i]);
                break;
              case '5':
                newNumber.push(number[i]);
                break;
              case '6':
                newNumber.push(number[i], '-');
                break;
              case '7':
                newNumber.push(number[i]);
                break;
              case '8':
                newNumber.push(number[i]);
                break;
              case '9':
                newNumber.push(number[i]);
                break;
              case '10':
                newNumber.push(number[i]);
        }
      } else {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    return newNumber.join('');
  }
  return 'Array com tamanho incorreto.';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let trianglePoss = false;
  let somaAB = lineA + lineB;
  let somaAC = lineA + lineC;
  let somaBC = lineB + lineC;
  let difAB = Math.abs(lineA - lineB);
  let difAC = Math.abs(lineA - lineC);
  let difBC = Math.abs(lineB - lineC);
  switch (true) {
    case lineA < somaBC && lineA > difBC:
      trianglePoss = true;
      break;
    case lineB < somaAC && lineB > difAC:
      trianglePoss = true;
      break;
    case lineC < somaAB && lineC > difAB:
      trianglePoss = true;
  }
  return trianglePoss;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let bebidas = string.match(/[0-9]/g);
  let coposDeAgua = 0;
  for (bebida of bebidas) {
    let integer = parseInt(bebida, 10);
    coposDeAgua += integer;
  }
  if (coposDeAgua === 1) {
    return coposDeAgua + ' copo de água';
  }
  return coposDeAgua + ' copos de água'; 
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
