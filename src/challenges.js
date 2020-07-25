// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(array) {
  let resultado = array[array.length - 1] + ', ' + array[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = 3;
  let tiesPoints = 1;
  let points = (wins * winsPoints) + (ties * tiesPoints);
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let repeat = 0;
  let highestNumber = 0;
  for (let i = 0; i <= arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > highestNumber) {
      highestNumber = arrayNumbers[i];
    }
  }
  for (let i = 0; i <= arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] === highestNumber) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let pos1 = mouse - cat1;
  let pos2 = mouse - cat2;
  if (pos1 < 0) {
    pos1 = pos1 * -1;
  }
  if (pos2 < 0) {
    pos2 = pos2 * -1;
  }
  if (pos1 === pos2) {
    return 'os gatos trombam e o rato foge';
  } else if (pos2 < pos1) {
    return 'cat2';
  }
  return 'cat1'; 
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzz = [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (((arrayNumbers[i] % 3) === 0) && ((arrayNumbers[i] % 5) === 0)) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if ((arrayNumbers[i] % 3) === 0) {
      arrayFizzBuzz.push('fizz');
    } else if ((arrayNumbers[i] % 5) === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}


// Desafio 9
function encode(codigo) {
  let code = [];
  for (let i = 0; i < codigo.length; i += 1) {
    switch (codigo[i]) {
      case 'a':
        code[i] = 1;
        break;
      case 'e':
        code[i] = 2;
        break;
      case 'i':
        code[i] = 3;
        break;
      case 'o':
        code[i] = 4;
        break;
      case 'u':
        code[i] = 5;
        break;
        default:
          code[i] = codigo[i];
          break;
        }
      }
      return code.join('');
}
function decode(encode) {
  let recode = encode.split('');
  for (let i = 0; i < recode.length; i += 1) {
    switch (recode[i]) {
      case '1':
        recode[i] = 'a';
        break;
      case '2':
        recode[i] ='e';
        break;
      case '3':
        recode[i] ='i';
        break;
      case '4':
        recode[i] = 'o';
        break;
      case '5':
        recode[i] = 'u';
        break;
        default:
          recode[i] = recode[i];
          break;
        }
  }
  return recode.join('');
}

// Desafio 10
function techList(tec, name) {
  let newList = [];
  if (tec.length > 0) {
    tec.sort();
    for (let i = 0; i < tec.length; i += 1) {
      newList.push({ 'tech': tec[i], 'name': name });
    }
  } else {
    newList = 'Vazio!';
  }
  return newList;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let cont;
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto';
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if ((numbers[i] < 0) || (numbers[i] > 9) || (cont > 2)) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    cont = 0;
    for (let j = 0; j < numbers.length; j += 1) {
      if (numbers[i] === (numbers[j])) {
      cont += 1;
      }
    } 
  }
  numbers.splice (2, 0, ') ');
  numbers.splice (9, 0, '-');
  numbers.unshift ('(');
  return numbers.join ('');
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
