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
function highestCount(numbers) {
  let highNumber = 0;
  let index = 0;
  let count = 0;
  for (let i in numbers) {
    if (numbers[index] <= numbers[i]) {
      highNumber = numbers[i];
      index = i;
    }
  }
  for (let j in numbers) {
    if (numbers[j] === highNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse > cat1) {
    cat1 = mouse - cat1;
  } else {
    cat1 -= mouse;
  } if (mouse > cat2) {
    cat2 = (mouse - cat2);
  } else {
    cat2 -= mouse;
  } if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 < cat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let num in array) {
    if (array[num] % 3 === 0 && array[num] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if ((array[num] % 3) === 0) {
      newArray.push('fizz');
    } else if (array[num] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  let string2 = '';
  for (let indice in string) {
    if (string[indice] === 'a') {
      string2 += '1';
    } else if (string[indice] === 'e') {
      string2 += '2';
    } else if (string[indice] === 'i') {
      string2 += '3';
    } else if (string[indice] === 'o') {
      string2 += '4';
    } else if (string[indice] === 'u') {
      string2 += '5';
    } else {
      string2 += string[indice];
    }
  }
  return string2;
}

function decode(codestring) {
  let newString = '';
  for (let i in codestring) {
    if (codestring[i] === '1') {
      newString += 'a';
    } else if (codestring[i] === '2') {
      newString += 'e';
    } else if (codestring[i] === '3') {
      newString += 'i';
    } else if (codestring[i] === '4') {
      newString += 'o';
    } else if (codestring[i] === '5') {
      newString += 'u';
    } else {
      newString += codestring[i];
    }
  }
  return newString;
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
  object.sort(function(a, b) {
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
function generatePhoneNumber() {
  // seu código aqui
}

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
console.log(triangleCheck(10, 14, 8));
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
