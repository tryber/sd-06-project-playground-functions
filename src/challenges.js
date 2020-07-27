// Desafio 1
function compareTrue(statement1, statement2) {
  return (statement1 && statement2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let splitPhrase = phrase.split(' ');
  return splitPhrase;
}


// Desafio 4
function concatName(nameList) {
  return `${nameList[nameList.length - 1]}, ${nameList[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(numList) {
  let highest = 0;
  let count = 0;
  for (let i in numList) {
    highest = 0;
    for (let j in numList) {
      if (numList[i] >= numList[j]) {
        highest += 1;
      }
    }
    if (highest === numList.length) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  let distCat2 = cat2 - mouse;
  let answer = 'os gatos trombam e o rato foge';
  if (distCat1 ** 2 < distCat2 ** 2) {
    answer = 'cat1';
  } else if (distCat1 ** 2 > distCat2 ** 2) {
    answer = 'cat2';
  }
  return answer;
}

// Desafio 8
function fizzBuzz(numList) {
  let fizzyBuzzy = [];
  for (let i in numList) {
    if (numList[i] % 3 === 0 && numList[i] % 5 === 0) {
      fizzyBuzzy.push('fizzBuzz');
    } else if (numList[i] % 3 === 0 && numList[i] % 5 !== 0) {
      fizzyBuzzy.push('fizz');
    } else if (numList[i] % 3 !== 0 && numList[i] % 5 === 0) {
      fizzyBuzzy.push('buzz');
    } else {
      fizzyBuzzy.push('bug!');
    }
  }
  return fizzyBuzzy;
}

// Desafio 9
function encode(message) {
  let letters = message.split('');
  let encodedMessage = '';
  for (let i in letters) {
    switch (letters[i]) {
      case 'a':
        letters[i] = '1';
        break;
      case 'e':
        letters[i] = '2';
        break;
      case 'i':
        letters[i] = '3';
        break;
      case 'o':
        letters[i] = '4';
        break;
      case 'u':
        letters[i] = '5';
        break;
      default:
        break;
    }
    encodedMessage += letters[i];
  }
  return encodedMessage;
}

function decode(numberedMessage) {
  let lettersAndNumbers = numberedMessage.split('');
  let decodedMessage = '';
  for (let i in lettersAndNumbers) {
    switch (lettersAndNumbers[i]) {
      case '1':
        lettersAndNumbers[i] = 'a';
        break;
      case '2':
        lettersAndNumbers[i] = 'e';
        break;
      case '3':
        lettersAndNumbers[i] = 'i';
        break;
      case '4':
        lettersAndNumbers[i] = 'o';
        break;
      case '5':
        lettersAndNumbers[i] = 'u';
        break;
      default:
        break;
    }
    decodedMessage += lettersAndNumbers[i];
  }
  return decodedMessage;
}

// Desafio 10
function techList(techNames, nameUsr) {
  let listOfObj = [];
  if (techNames.length === 0) {
    listOfObj = 'Vazio!';
  } else {
    let listOfTech = techNames.sort();
    for (let i in listOfTech) {
      let obj = {};
      obj.tech = listOfTech[i];
      obj.name = nameUsr;
      listOfObj.push(obj);
    }
  }
  return listOfObj;
}

// Desafio 11
function generatePhoneNumber(stringPhone) {
  if (stringPhone.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    const erro = 'não é possível gerar um número de telefone com esses valores';
    // let arrayPhone = stringPhone.split('');
    let arrayPhone = [];
    for (let i in stringPhone) {
      arrayPhone[i] = stringPhone[i];
    }
    for (let i = 0; i < arrayPhone.length; i += 1) {
      arrayPhone[i] = parseInt(arrayPhone[i], 10);
      if (arrayPhone[i] < 0 || arrayPhone[i] > 9) {
        return erro;
      }
    }
    for (let j = 0; j < arrayPhone.length; j += 1) {
      let count = 0;
      for (let k = 0; k < arrayPhone.length; k += 1) {
        if (arrayPhone[k] === arrayPhone[j]) {
          count += 1;
        }
      }
      if (count >= 3) {
        return erro;
      }
    }
    let ddd = `(${arrayPhone[0]}${arrayPhone[1]})`;
    let firstPart = ` ${arrayPhone[2]}${arrayPhone[3]}${arrayPhone[4]}${arrayPhone[5]}${arrayPhone[6]}`;
    let secondPart = `-${arrayPhone[7]}${arrayPhone[8]}${arrayPhone[9]}${arrayPhone[10]}`;
    return ddd + firstPart + secondPart;
  }
}

// Desafio 12
function triangleCheck(sideA, sideB, sideC) {
  let conditionCount = 0;
  let answer = false;
  if (sideB + sideC > sideA && Math.abs(sideB - sideC) < sideA) {
    conditionCount += 1
  }
  if (sideA + sideC > sideB && Math.abs(sideA - sideC) < sideB) {
    conditionCount += 1
  }
  if (sideB + sideA > sideC && Math.abs(sideB - sideA) < sideC) {
    conditionCount += 1
  }
  if (conditionCount === 3) {
    answer = true;
  }
  return answer;
}

// Desafio 13
function hydrate(drinks) {
  let numDrinks = drinks.replace(/\D/g, '');
  let totalWater = 0;
  for (let i in numDrinks) {
    let water = parseInt(numDrinks[i], 10)
    totalWater += water;
  }
  if (totalWater === 1) {
    return `${totalWater} copo de água`;
  } else if (totalWater > 1) {
    return `${totalWater} copos de água`;
  } else {
    return 'Beba a quantidade de água que quiser'
  }
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
