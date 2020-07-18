// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  let res = false;
  if ((bool1 && bool2) === true) {
    res = true;
  }
  return res;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let txt = '';
  let strArray = [];
  let counter = 0;
  for (let i = 0; i < str.length; i = i + 1) {
    if (str[i] != ' ' ) {
      txt += str[i];
      strArray[counter] = txt;
    } else {
        if (txt != '') {
        counter = counter + 1;
        txt = '';
        }
    }
  }
  return strArray;
}

// Desafio 4
function concatName(strArray) {
  // seu código aqui
  return strArray[strArray.length-1] + ', ' + strArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3*wins) + (1*ties);
}

// Desafio 6
function highestCount(numArray) {
  // seu código aqui
  let greater = 0;
  for (let i = 0; i < numArray.length; i = i + 1) {
    if (numArray[i] > greater) {
      greater = numArray[i];
    }
  }

  let counter = 0;
  for (let i = 0; i < numArray.length; i = i + 1) {
    if (numArray[i] === greater) {
      counter = counter + 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (((cat1 - mouse) ** 2) ** 0.5 < ((cat2 - mouse) ** 2) ** 0.5 ) {
    return 'cat1';
  } else if (((cat1 - mouse) ** 2) ** 0.5 > ((cat2 - mouse) ** 2) ** 0.5 ) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numArray) {
  // seu código aqui
  let strArray = [];
  for (let i = 0; i < numArray.length; i = i + 1) {
    if (numArray[i] % 5 === 0 && numArray[i] % 3 === 0) {
      strArray[i] = 'fizzBuzz';
    } else if (numArray[i] % 3 === 0) {
      strArray[i] = 'fizz';
    } else if (numArray[i] % 5 === 0) {
      strArray[i] = 'buzz';
    } else if (numArray[i] % 5 !== 0 && numArray[i] % 3 !== 0) {
      strArray[i] = 'bug!';
    }
  }
  return strArray;
}

// Desafio 9
function encode(strEntry) {
  // seu código aqui
  let str = '';
  for (let i = 0; i < strEntry.length; i = i + 1) {
    switch (strEntry[i]) {
      case 'a':
        str += '1';
        break;
      case 'e':
        str += '2';
        break;
      case 'i':
        str += '3';
        break;
      case 'o':
        str += '4';
        break;
      case 'u':
        str += '5';
        break;
      default:
        str += strEntry[i];
    }
  }
  return str;
}
function decode(strEntry) {
  // seu código aqui
  let str = '';
  for (let i = 0; i < strEntry.length; i = i + 1) {
    switch (strEntry[i]) {
      case '1':
        str += 'a';
        break;
      case '2':
        str += 'e';
        break;
      case '3':
        str += 'i';
        break;
      case '4':
        str += 'o';
        break;
      case '5':
        str += 'u';
        break;
      default:
        str += strEntry[i];
    }
  }
  return str;
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  if (tech == '') {
    return 'Vazio!';
  } else {
    let str = [];
    tech = tech.sort();
    for (let i = 0; i < tech.length; i = i + 1) {
      str[i] = {
        tech: tech[i],
        name: name,
      };
    }
    return str;
  }
}

// Desafio 11
function generatePhoneNumber(numbersArray) {
  // seu código aqui
  if (numbersArray.length != 11) {
    return 'Array com tamanho incorreto.';
  } else {
    let phone = '';
    let i = 0;
    while (i < numbersArray.length) {
      if (numbersArray[i] < 0 || numbersArray[i] > 9){
        return 'não é possível gerar um número de telefone com esses valores';
        break;
      }
      let hits = 0;
      let ii = 0;
      while(ii < numbersArray.length) {
        if (numbersArray[ii] - numbersArray[i] == 0) {
          hits = hits + 1;
          if (hits > 2) {
            return 'não é possível gerar um número de telefone com esses valores';
            break;
          }
        }
      ii++;
      }
    if (i == 0){
      phone += '(' + numbersArray[i];  
    } else if (i == 1) {
      phone += numbersArray[i] + ') ';
    } else if (i == 6) {
      phone += numbersArray[i] + '-';
    } else {
      phone += numbersArray[i];
    }
    i++;
    }
    return phone;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let condA = ((lineA < (lineB + lineC)) && (lineA > ((lineB - lineC) ** 2) ** 0.5)) ? true : false;
  let condB = ((lineB < (lineA + lineC)) && (lineB > ((lineA - lineC) ** 2) ** 0.5)) ? true : false;
  let condC = ((lineC < (lineB + lineA)) && (lineC > ((lineB - lineA) ** 2) ** 0.5)) ? true : false;
  
  if (condA == true && condB == true && condC == true){
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(str) {
  // seu código aqui
  let nCopos = 0;
  for (let i = 0; i < str.length; i = i +1){
    if ( parseInt(str[i]) > 0) {
      nCopos += parseInt(str[i]);
    }
  }
  return nCopos + ' copos de água';
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
