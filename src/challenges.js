// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2;
}
 
//Desafio 3
function splitSentence(str) {
  let word = ''
  let array = [];
    for (index in str) {
      if (str[index] != " ") {
        word += str[index];
      }else if (str[index] == " ") {
        array.push(word);
        word = "";
      }
    } 
    array.push(word);
    return array;
}

// Desafio 4
function concatName(array) {
  str =  array[array.length-1] + ', ' + array[0];
  return str
}

// Desafio 5
function footballPoints(wins, ties) {
    return (wins * 3) + (ties * 1)
}

function highestCount(array) {
  let repete = 0;
  let maior = 0;
  
  for(let i = 0; i <= array.length - 1; i += 1) {
    if (array[i] > maior) {
        maior = array[i]
    }
}
for(let j = 0; j <= array.length -1; j += 1) {
    if (maior == array[j]) {
        repete = repete + 1;
    }
}
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 ;
  let distCat2 ; 
  distCat1 = cat1 - mouse;
  distCat2 = cat2 - mouse;

  if (distCat1 < 0) {
    distCat1 = distCat1 * (-1);
  } 
  if (distCat2 < 0) {
    distCat2 = distCat2 * (-1);
  }
  if (distCat1 < distCat2){
    return 'cat1';
  } else if (distCat2 < distCat1) {
    return 'cat2';
  }  else {
    return 'os gatos trombam e o rato foge';
  }
}
  
 // Desafio 8
function fizzBuzz(array) {
  let newArray = [];

  for(i = 0; i <= array.length -1; i += 1) {
      
      if ((array[i] % 3 == 0) && (array[i] % 5 == 0)) {
          newArray.push('fizzBuzz');
      } else if ((array[i] % 3 != 0) && (array[i] % 5 != 0)) {
          newArray.push('bug!');
      } else if (array[i] % 3 == 0) {
          newArray.push('fizz');
      } else {
          newArray.push('buzz');
      }
} 
  return newArray;
}
 
// Desafio 9
function encode(inputStr) {
    var code;
    var outputStr = '';

  for(index = 0; index <= inputStr.length - 1; index ++){

  switch(inputStr[index]) {
      case 'a':
          code = '1';
          break;
      case 'e':
          code = '2';
          break;
      case 'i':
          code = '3';
          break
      case 'o':
          code = '4';
          break
      case 'u':
          code = '5';
          break;
      default:
          code = inputStr[index];
  }    
      outputStr += code
}
    return outputStr;
}

function decode(inputStr) {
  var decoder;
  var outputStr = '';

for(index = 0; index <= inputStr.length - 1; index ++){

switch(inputStr[index]) {
    case '1':
        decoder = 'a';
        break;
    case '2':
        decoder = 'e';
        break;
    case '3':
        decoder = 'i';
        break
    case '4':
        decoder = 'o';
        break
    case '5':
        decoder = 'u';
        break;
    default:
        decoder = inputStr[index];
}    
    outputStr += decoder
}
  return outputStr;
}
 
// Desafio 10
function techList(arrayTec, name) {
  // seu código aqui
  let newArray = [];
  arrayTec.sort();

  if (arrayTec.length == 0) {
    return 'Vazio!'
  }

  for(i = 0; i <= arrayTec.length -1; i+= 1) {
    newArray.push({tech:arrayTec[i], name:name});
  }  
  return newArray;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  //var array = [1,1,9,8,0,8,4,4,7,4,7]
var repeatNumber = 0;
var repete = 0;
var correctNumber = '';
var formatedNumber = '';

if (array.length != 11) {
    console.log("Array com tamanho incorreto.");
}
for(i = 0; i <= array.length - 1; i ++) {
    if (array[i] < 0 || array[i] > 9) {
        return "não é possível gerar um número de telefone com esses valores";
    }
    repete = 0;
    let a = array[i];
    for(let j = 0; j <= array.length -1; j += 1) {
        if (a == array[j]) {
            repete = repete + 1;
        }
    }
    if (repete > 3) {
        return "não é possível gerar um número de TELEFONE com esses valores";
        break;    
}  
    correctNumber += array[i];
} 
    formatedNumber = '('+correctNumber[0]+ correctNumber[1]+')'+correctNumber[2]+correctNumber[3]+correctNumber[4]+correctNumber[5]+correctNumber[6]+'-'+correctNumber[7]+correctNumber[8]+correctNumber[9]+correctNumber[10];
    return formatedNumber;
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
