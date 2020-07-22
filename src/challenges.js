// Desafio 1
function compareTrue(value, value2) {
  if (value === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}


// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(array) {
  array.sort((a, b) => a - b);
  let highNumber = array[(array.length - 1)];
  let count = 0;
  for (let j in array) {
    if (array[j] === highNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 < cat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function analizaNumArray(number) {
  let num3;
  let num5;
  num3 = number % 3 === 0;
  num5 = number % 5 === 0;
  if (num3 && num5) {
    return 'fizzBuzz';
  } else if (num3) {
    return 'fizz';
  } else if (num5) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(array) {
  let newArray = [];
  for (let num = 0; num < array.length; num += 1) {
    newArray.push(analizaNumArray(array[num]));
  }
  return newArray;
}

// Desafio 9
function decodeEencode(string) {
  let newString = [];
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case 'a': newString.push('1'); break;
      case 'e': newString.push('2'); break;
      case 'i': newString.push('3'); break;
      case 'o': newString.push('4'); break;
      case 'u': newString.push('5'); break;
      case '1': newString.push('a'); break;
      case '2': newString.push('e'); break;
      case '3': newString.push('i'); break;
      case '4': newString.push('o'); break;
      case '5': newString.push('u'); break;
      default: newString.push(string[i]);
    }
  }
  return newString;
}

function encode(string) {
  let code = decodeEencode(string).toString().replace(/,/g, '');
  return code;
}

function decode(codestring) {
  let code = decodeEencode(codestring).toString().replace(/,/g, '');
  return code;
}

// Desafio 10
function techList(tec, name) {
  let object = [];
  if (tec.length === 0) {
    return 'Vazio!';
  }
  for (let indice = (tec.length - 1); indice >= 0; indice -= 1) {
    object[indice] = { tech: tec[indice] };
    object[indice].name = name;
  }
  object.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  });
  return object;
}

// Desafio 11
function repeteTresOuMais(numbers) {
  let nums = {};
  for (let i = 0; i < numbers.length; i += 1) {
    if (nums[numbers[i]] >= 3) {
      return true;
    } else if (numbers[i] in nums) {
      nums[numbers[i]] += 1;
    } else {
      nums[numbers[i]] = 1;
    }
  }
  return false;
}
function outrosNums(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return true;
    }
  }
  return false;
}
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (repeteTresOuMais(numbers) || outrosNums(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
}

// console.log(generatePhoneNumber([1, 2, 3, 3, 5, 6, 1, 5, 9, 0, 2]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs((lineB - lineC))) {
    return true;
  }
  if (lineB < (lineA + lineC) && lineB > Math.abs((lineA - lineC))) {
    return true;
  }
  if (lineC < (lineB + lineA) && lineC > Math.abs((lineB - lineA))) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let total = 0;
  let nums = string.match(/\d/g);
  for (let indice = 0; indice < nums.length; indice += 1) {
    total += Number(nums[indice]);
  }
  if (total === 1) {
    return `${total} copo de água`;
  }
  return `${total} copos de água`;
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
};
