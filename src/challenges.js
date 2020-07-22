// Desafio 1
function compareTrue(value1, value2) {
  let result = Boolean;
  if (value1 === true && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let newString = `${arrayOfStrings[arrayOfStrings.length - 1]}, ${arrayOfStrings[0]}`;
  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalOfPoints = (wins * 3) + ties;
  return totalOfPoints;
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = numberArray[0];
  let counter = 0;
  for (let i = 0; i < numberArray.length; i += 1) {
    if (highestNumber === numberArray[i]) {
      counter += 1;
    }
    if (numberArray[i] > highestNumber) {
      highestNumber = numberArray[i];
      counter = 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);
  let answer;
  if (distance1 === distance2) {
    answer = 'os gatos trombam e o rato foge';
  } else if (distance1 < distance2) {
    answer = 'cat1';
  } else {
    answer = 'cat2';
  }
  return answer;
}

// Desafio 8
function fizzBuzz(numbers) {
  let buzzResult = [];
  for (let j = 0; j < numbers.length; j += 1) {
    let div3 = numbers[j] % 3 === 0;
    let div5 = numbers[j] % 5 === 0;
    if (div3 && div5) {
      buzzResult.push('fizzBuzz');
    } else if (div3) {
      buzzResult.push('fizz');
    } else if (div5) {
      buzzResult.push('buzz');
    } else {
      buzzResult.push('bug!');
    }
  }
  return buzzResult;
}

// Desafio 9
function encode(words) {
  words = words.split('');
  let letters = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let k = 0; k < words.length; k += 1) {
    for (let key in letters) {
      if (key === words[k]) {
        words[k] = letters[words[k]]
      }
    }
  }
  words = words.join('');
  return words;
}
function decode(words) {
  words = words.split('');
  let letters = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let k = 0; k < words.length; k += 1) {
    for (let key in letters) {
      if (letters[key] === words[k]) {
        words[k] = key
      }
    }
  }
  words = words.join('');
  return words;
}

// Desafio 10
function techList(technologies, nameStudent) {
  let results;
  if (technologies.length === 0) {
    results = 'Vazio!';
  } else {
    let objects = [];
    technologies.sort();
    for (let i = 0; i < technologies.length; i += 1) {
      objects.push({
        tech: technologies[i],
        name: nameStudent,
      });
    }
    results = objects;
  }
  return results;
}

// Desafio 11
function generatePhoneNumber(numeros) {
  let impossivel = null;
  let result;
  for (let i = 0; i < numeros.length; i += 1) {
    let repeticoes = 0;
    for (let j = 0; j < numeros.length; j += 1) {
      if (numeros[i] === numeros[j]) {
        repeticoes += 1;
      }
    }
    if (repeticoes >= 3 || numeros[i] < 0 || numeros[i] > 9) {
      impossivel = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (numeros.length !== 11) {
    impossivel = 'Array com tamanho incorreto.';
  }
  if (impossivel != null) {
    result = impossivel;
  } else {
    numeros.splice(7, 0, '-');
    numeros.splice(2, 0, ') ');
    numeros.splice(0, 0, '(');
    result = numeros.join('');
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let response = false;
  let compare1 = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
  let compare2 = lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC);
  let compare3 = lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA);
  if (compare1 && compare2 && compare3) {
    response = true;
  }
  return response;
}

// Desafio 13
function hydrate(string) {
  let somenteNumeros = string.replace(/\D+/g, '');
  let soma = 0;
  for (let i = 0; i < somenteNumeros.length; i += 1) {
    soma += parseInt(somenteNumeros[i], 10);
  }
  if (soma === 1) {
    soma += ' copo de água';
  } else {
    soma += ' copos de água';
  }
  return soma;
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
