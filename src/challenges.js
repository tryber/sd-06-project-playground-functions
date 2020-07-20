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
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] != ' ') {
      txt += str[i];
      strArray[counter] = txt;
    } else {
      if (txt != '') {
        counter += 1;
        txt = '';
      }
    }
  }
  return strArray;
}

// Desafio 4
function concatName(strArray) {
  // seu código aqui
  return strArray[strArray.length - 1] + ', ' + strArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3 * wins) + (1 * ties);
}

// Desafio 6
function highestCount(numArray) {
  // seu código aqui
  let greater = 0;
  for (let i = 0; i < numArray.length; i += 1) {
    if (numArray[i] > greater) {
      greater = numArray[i];
    }
  }

  let counter = 0;
  for (let i = 0; i < numArray.length; i += 1) {
    if (numArray[i] === greater) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
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
  // seu código aqui
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
function encode(strEntry) {
  // seu código aqui
  return encodeOrDecode(strEntry, 'encode');
}
function decode(strEntry) {
  // seu código aqui
  return encodeOrDecode(strEntry, 'decode');
}

function encodeOrDecode (strEntry, operation) {
  let str = '';
  if (operation === 'decode') {
    for (let i = 0; i < strEntry.length; i += 1) {
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
  } else if (operation === 'encode') {
    for (let i = 0; i < strEntry.length; i += 1) {
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
  }
  return str;
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let res;
  if (tech == '') {
    res = 'Vazio!';
  } else {
    let str = [];
    tech = tech.sort();
    for (let i = 0; i < tech.length; i += 1) {
      str[i] = {
        tech: tech[i],
        name,
      };
    }
    res = str;
  }
  return res;
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
      if (numbersArray[i] < 0 || numbersArray[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else {
        let hits = 0;
        let ii = 0;
        while(ii < numbersArray.length) {
          if (numbersArray[ii] - numbersArray[i] == 0) {
            hits += 1;
            if (hits > 2) {
              return 'não é possível gerar um número de telefone com esses valores';
              break;
            }
          }
        ii++;
        }
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
  for (let i = 0; i < str.length; i += 1){
    if ( parseInt(str[i]) > 0) {
      nCopos += parseInt(str[i]);
    }
  }

  if (parseInt(nCopos) > 1) {
    return nCopos + ' copos de água';
  } else {
    return nCopos + ' copo de água';
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

//Tests
function checkCompareTrue() {
  (compareTrue (true, true) === true && compareTrue (true, false) === false && compareTrue (false, false) === false) ? console.log('Function compareTrue validated!') : console.log('Function compareTrue invalidated!'); 
}

function checkCalcArea() {
  (calcArea(10,1.2) === 6) ? console.log('Function calcArea validated!') : console.log('Function calcArea invalidated!') ;
}

function checkSplitSentence() {
  let res = splitSentence('  I study at Trybe every week   ');
  (res[0] == 'I' && res[1] == 'study' && res[2] == 'at' && res[3] == 'Trybe' && res[4] == 'every' && res[5] == 'week') ? console.log('Function splitSentence validated!') : console.log('Function splitSentence invalidated!') ;
}

function checkConcatName() {
(concatName(['I','study','at','Trybe','every','week']) == 'week, I') ? console.log('Function concatName validated!') : console.log('Function concatName invalidated!') ;
}

function checkFootballPoints() {
  (footballPoints(30,10) === 100) ? console.log('Function footballPoints validated!') : console.log('Function footballPoints invalidated!') ;
}

function checkHighestCount() {
  (highestCount([9, 1, 2, 3, 9, 5, 7]) == 2) ? console.log('Function highestCount validated!') : console.log('Function highestCount invalidated!') ;
}

function checkCatAndMouse() {
  (catAndMouse(0, 1, 2) == 'cat1' && catAndMouse(5, 0, 2) == 'cat2' && catAndMouse(1, 0, 2) == 'os gatos trombam e o rato foge') ? console.log('Function catAndMouse validated!') : console.log('Function catAndMouse invalidated!') ;
}

function checkFizzBuzz() {
  let res = fizzBuzz([2, 15, 7, 9, 45]);
  (res[0] == 'bug!' && res[1] == 'fizzBuzz' && res[2] == 'bug!' && res[3] == 'fizz' && res[4] == 'fizzBuzz') ?  console.log('Function fizzBuzz validated!') : console.log('Function fizzBuzz invalidated!') ;
}

function checkEncode() {
  (encode('hi there!') === 'h3 th2r2!') ? console.log('Function encode validated!') : console.log('Function encode invalidated!') ;
}

function checkDecode() {
  (decode('h3 th2r2!') === 'hi there!') ? console.log('Function decode validated!') : console.log('Function decode invalidated!') ;
}

function checkTechList() {
  let res = techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],'Lucas');
  (res[0].tech == 'CSS' && res[0].name == 'Lucas' && res[1].tech == 'HTML' && res[1].name == 'Lucas' && res[2].tech == 'JavaScript' && res[2].name == 'Lucas' && res[3].tech == 'Jest' && res[3].name == 'Lucas' && res[4].tech == 'React' && res[4].name == 'Lucas')? console.log('Function techList validated!') : console.log('Function techList invalidated!') ;
}

function checkGeneratePhoneNumber() {
  (generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]) == '(12) 34567-8901') ? console.log('Function generatePhoneNumber validated!') : console.log('Function generatePhoneNumber invalidated!') ;
}

function checkTriangleCheck() {
  (triangleCheck(10, 14, 8) === true && triangleCheck(5,3,2) === false) ? console.log('Function triangleCheck validated!') : console.log('Function triangleCheck invalidated!') ;
}

function checkHydrate() {
  (hydrate('0 cachaça, 5 cervejas e 4 copo de vinho') === '9 copos de água' && hydrate('1 cachaça, 0 cervejas e 0 copo de vinho') === '1 copo de água') ? console.log('Function hydrate validated!') : console.log('Function hydrate invalidated!') ;
}

//Call to tests
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