// Desafio 1
function compareTrue(bool1, bool2) {
  return (bool1 == true && bool2 == true) ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  let txt = '';
  let strArray = [];
  let counter = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] != ' ') {
      txt += str[i];
      strArray[counter] = txt;
    } else if (str[i] === ' ' && txt !== '') {
      counter += 1;
      txt = '';
    }
  }
  return strArray;
}

// Desafio 4
function concatName(strArray) {
  return (strArray[strArray.length - 1].concat(', ')).concat(strArray[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + (1 * ties);
}

// Desafio 6
function highestCount(numArray) {
  let greater = 0;
  for (let i = 0; i < numArray.length; i += 1) {
    greater = (numArray[i] > greater) ? numArray[i] : greater;
  }

  let counter = 0;
  for (let i = 0; i < numArray.length; i += 1) {
    if (numArray[i] === greater) {
      counter += 1;
    } else {
      counter = counter;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let res;
  if (((cat1 - mouse) ** 2) ** 0.5 < ((cat2 - mouse) ** 2) ** 0.5) {
    res = 'cat1';
  } else if (((cat1 - mouse) ** 2) ** 0.5 > ((cat2 - mouse) ** 2) ** 0.5) {
    res = 'cat2';
  } else {
    res = 'os gatos trombam e o rato foge';
  }
  return res;
}

// Desafio 8
function fizzBuzz(numArray) {
  let strArray = [];
  for (let i = 0; i < numArray.length; i += 1) {
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
function encodeOrDecode (strEntry, operation) {
  let pair = { number: ['1', '2', '3', '4', '5'],
    letter: ['a', 'e', 'i', 'o', 'u'],
  }
  let str = '';
  if (operation === 'encode') {
    for (let i = 0; i < strEntry.length; i += 1) {
      str += (strEntry[i] === 'a' || strEntry[i] === 'e' || strEntry[i] === 'i' || strEntry[i] === 'o' || strEntry[i] === 'u') ? pair.number[pair.letter.indexOf(strEntry[i])] : strEntry[i];
    }
  } else if (operation === 'decode') {
    for (let i = 0; i < strEntry.length; i += 1) {
      str += (strEntry[i] === '1' || strEntry[i] === '2' || strEntry[i] === '3' || strEntry[i] === '4' || strEntry[i] === '5') ? pair.letter[pair.number.indexOf(strEntry[i])] : strEntry[i];
    }
  }
  return str;
}

function encode(strMsg) {
  return encodeOrDecode(strMsg, 'encode');
}
function decode(strMsg) {
  return encodeOrDecode(strMsg, 'decode');
}

// Desafio 10
function techList(tech, name) {
  let res;
  if (tech.length == 0) {
    res = 'Vazio!';
  } else {
    res = [];
    tech = tech.sort();
    for (let i = 0; i < tech.length; i += 1) {
      res[i] = {
        tech: tech[i],
        name,
      };
    }
  }
  return res;
}

// Desafio 11
function generatePhoneNumber(numbersArray) {
  const isLower = (currentValue) => (currentValue >= 0 && currentValue <= 9);
  let completePhone;     
  if (numbersArray.length !== 11) {
    completePhone = 'Array com tamanho incorreto.';
  } else if (numbersArray.every(isLower) === false) {
    completePhone = 'não é possível gerar um número de telefone com esses valores'; 
  } else {
    let i = 0;
    let stopSinal = 0;
    let numberParameters = {
      prefix: '(',
      suffix: ') ',
      separator: '-',
      regionCode: '',
      firstNumerals: '',
      lastNumerals: '',
    }
    while (i < numbersArray.length && stopSinal != 1){
      let frequency = numbersArray.filter(currentValue => currentValue == numbersArray[i]);
      if (frequency.length >= 3) {
        completePhone = 'não é possível gerar um número de telefone com esses valores';
        stopSinal = 1;
      } else {
        numberParameters.regionCode += (i == 0 || i == 1) ? numbersArray[i] : '';
        numberParameters.firstNumerals += (i == 2 || i == 3 || i == 4 || i == 5 || i == 6) ? numbersArray[i] : '';
        numberParameters.lastNumerals += (i == 7 || i == 8 || i == 9 || i == 10) ? numbersArray[i] : '';
      }

      i += 1;
    }
    if (stopSinal === 0 ) {
      completePhone = numberParameters.prefix.concat(numberParameters.regionCode).concat(numberParameters.suffix).concat(numberParameters.firstNumerals).concat(numberParameters.separator).concat(numberParameters.lastNumerals);    
    }
  }
  return completePhone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let condA = ((lineA < (lineB + lineC)) && (lineA > ((lineB - lineC) ** 2) ** 0.5)) ? true : false;
  let condB = ((lineB < (lineA + lineC)) && (lineB > ((lineA - lineC) ** 2) ** 0.5)) ? true : false;
  let condC = ((lineC < (lineB + lineA)) && (lineC > ((lineB - lineA) ** 2) ** 0.5)) ? true : false;
  return (condA === true && condB === true && condC === true) ? true : false;
}

// Desafio 13
function hydrate(str) {
  // seu código aqui
  let nCopos = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (parseInt(str[i]) > 0) {
      nCopos += parseInt(str[i]);
    }
  }

  return (parseInt(nCopos) > 1) ? nCopos + ' copos de água' : nCopos + ' copo de água';
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

function checkCompareTrue() {
  (compareTrue(true, true) === true && compareTrue(true, false) === false && compareTrue(false, false) === false) ? console.log('Function compareTrue validated!') : console.log('Function compareTrue invalidated!');
}

function checkCalcArea() {
  (calcArea(10, 1.2) === 6) ? console.log('Function calcArea validated!') : console.log('Function calcArea invalidated!');
}

function checkSplitSentence() {
  let res = splitSentence('  I study at Trybe every week   ');
  (res[0] === 'I' && res[1] === 'study' && res[2] === 'at' && res[3] === 'Trybe' && res[4] === 'every' && res[5] === 'week') ? console.log('Function splitSentence validated!') : console.log('Function splitSentence invalidated!');
}

function checkConcatName() {
(concatName(['I','study','at','Trybe','every','week']) === 'week, I') ? console.log('Function concatName validated!') : console.log('Function concatName invalidated!');
}

function checkFootballPoints() {
  (footballPoints(30, 10) === 100) ? console.log('Function footballPoints validated!') : console.log('Function footballPoints invalidated!');
}

function checkHighestCount() {
  (highestCount([9, 1, 2, 3, 9, 5, 7]) === 2) ? console.log('Function highestCount validated!') : console.log('Function highestCount invalidated!');
}

function checkCatAndMouse() {
  (catAndMouse(0, 1, 2) === 'cat1' && catAndMouse(5, 0, 2) === 'cat2' && catAndMouse(1, 0, 2) === 'os gatos trombam e o rato foge') ? console.log('Function catAndMouse validated!') : console.log('Function catAndMouse invalidated!');
}

function checkFizzBuzz() {
  let res = fizzBuzz([2, 15, 7, 9, 45]);
  (res[0] === 'bug!' && res[1] === 'fizzBuzz' && res[2] === 'bug!' && res[3] === 'fizz' && res[4] === 'fizzBuzz') ?  console.log('Function fizzBuzz validated!') : console.log('Function fizzBuzz invalidated!');
}

function checkEncode() {
  (encode('hi there!') === 'h3 th2r2!') ? console.log('Function encode validated!') : console.log('Function encode invalidated!');
}

function checkDecode() {
  (decode('h3 th2r2!') === 'hi there!') ? console.log('Function decode validated!') : console.log('Function decode invalidated!');
}

function checkTechList() {
  let res = techList(['React' , 'Jest' , 'HTML' , 'CSS' , 'JavaScript'],'Lucas');
  (res[0].tech === 'CSS' && res[0].name === 'Lucas' && res[1].tech === 'HTML' && res[1].name === 'Lucas' && res[2].tech === 'JavaScript' && res[2].name === 'Lucas' && res[3].tech === 'Jest' && res[3].name === 'Lucas' && res[4].tech === 'React' && res[4].name === 'Lucas') ? console.log('Function techList validated!') : console.log('Function techList invalidated!');
}

function checkGeneratePhoneNumber() {
  (generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]) === '(12) 34567-8901') ? console.log('Function generatePhoneNumber validated!') : console.log('Function generatePhoneNumber invalidated!');
}

function checkTriangleCheck() {
  (triangleCheck(10, 14, 8) === true && triangleCheck(5, 3, 2) === false) ? console.log('Function triangleCheck validated!') : console.log('Function triangleCheck invalidated!');
}

function checkHydrate() {
  (hydrate('0 cachaça, 5 cervejas e 4 copo de vinho') === '9 copos de água' && hydrate('1 cachaça, 0 cervejas e 0 copo de vinho') === '1 copo de água') ? console.log('Function hydrate validated!') : console.log('Function hydrate invalidated!');
}

function testAll() {
  checkCompareTrue();
  checkCalcArea();
  checkSplitSentence();
  checkConcatName();
  checkFootballPoints();
  checkHighestCount();
  checkCatAndMouse();
  checkFizzBuzz();
  checkEncode();
  checkDecode();
  checkTechList();
  checkGeneratePhoneNumber();
  checkTriangleCheck();
  checkHydrate();
}
testAll();
