// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  if (val1 && val2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  return phrase.split(' ');
}

// Desafio 4
function concatName(name) {
  // seu código aqui
  let resultado = '';
  resultado += name[name.length - 1] + ', ' + name[0];
  return resultado;
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(values) {
  // seu código aqui
  let highValue = 0;
  for (let i of values) {
    if (i > highValue) {
      highValue = i;
    }
  }
  let count = 0;

  for (let i of values) {
    if (highValue === i) {
      count += 1;
    }
  }
  return count;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;

  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  }

  if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }

  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(values) {
  // seu código aqui
  let answer = [];
  for (let i = 0; i < values.length; i += 1) {
    if ((values[i] % 3 === 0) && (values[i] % 5 === 0)) {
      answer.push('fizzBuzz');
    } else if (values[i] % 3 === 0) {
      answer.push('fizz');
    } else if (values[i] % 5 === 0) {
      answer.push('buzz');
    } else {
      answer.push('bug!');
    }
  }
  return answer;
}

// Desafio 9
function encode(phrase) {
  // seu código aqui
  let phraseArray = phrase.split('');
  for (let i in phraseArray) {
    switch (phraseArray[i]) {
      case 'a': phraseArray[i] = 1;
        break;
      case 'e': phraseArray[i] = 2;
        break;
      case 'i': phraseArray[i] = 3;
        break;
      case 'o': phraseArray[i] = 4;
        break;
      case 'u': phraseArray[i] = 5;
        break;
      default:
        break;
    }
  }
  let phraseEncode = phraseArray.join('');
  return phraseEncode;
}

function decode(phrase) {
  // seu código aqui
  let phraseArray = phrase.split('');
  for (let i in phraseArray) {
    switch (phraseArray[i]) {
      case '1': phraseArray[i] = 'a';
        break;
      case '2': phraseArray[i] = 'e';
        break;
      case '3': phraseArray[i] = 'i';
        break;
      case '4': phraseArray[i] = 'o';
        break;
      case '5': phraseArray[i] = 'u';
        break;
      default:
        break;
    }
  }
  let phraseDecode = phraseArray.join('');
  return phraseDecode;
}

// Desafio 10
function techList(nameTech, name) {
  // seu código aqui
  if (nameTech.length === 0) {
    return 'Vazio!';
  }
  let result = [];
  for (let i in nameTech.sort()) {
    result.push({ tech: nameTech[i], name: name });
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(number) {
  // seu código aqui
  if (number.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  let message = 'não é possível gerar um número de telefone com esses valores';

  for (let i of number) {
    if (number[i] < 0 || number[i] > 9) {
      return message;
    }
  }

  for (let i in number) {
    let countRepeat = 0;
    for (let j in number) {
      if (number[i] === number[j]) {
        countRepeat += 1;
      }
      if (countRepeat > 2) {
        return message;
      }
    }
  }

  let numberResponse = '';

  for (let i in number) {
    switch (i) {
      case '0': numberResponse += '(' + number[i];
        break;
      case '1': numberResponse += number[i] + ') ';
        break;
      case '2': numberResponse += number[i];
        break;
      case '3': numberResponse += number[i];
        break;
      case '4': numberResponse += number[i];
        break;
      case '5': numberResponse += number[i];
        break;
      case '6': numberResponse += number[i] + '-';
        break;
      case '7': numberResponse += number[i];
        break;
      case '8': numberResponse += number[i];
        break;
      case '9': numberResponse += number[i];
        break;
      case '10': numberResponse += number[i];
        break;
      default:
        break;
    }
  }
  return numberResponse;
}

// Desafio 12
function triangleCheck(sideA, sideB, sideC) {
  // seu código aqui
  return (((sideA < (sideB + sideC)) && ((sideA > Math.abs(sideB - sideC)))) ||
  ((sideB < (sideA + sideC)) && ((sideB > Math.abs(sideA - sideC)))) ||
  ((sideC < (sideB + sideA)) && ((sideC > Math.abs(sideB - sideA))))) ? true : false;
}

// Desafio 13
function hydrate(phrase) {
  // seu código aqui
  let sum = 0;
  let quantity = '';
  let alert = '';
  for (let i of phrase.match(/\d+/g)){
    sum += parseInt(i);
  }
  sum === 1 ? quantity = ' copo' : quantity = ' copos'
  alert = sum + quantity + ' de água';
  return alert;
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