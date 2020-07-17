// Projeto 02 Jederson Macedo
// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2){
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(sentence) {
  let result = sentence.split(' ');
  return result;
}

// Desafio 4
function concatName(arrayNames) {
  return `${arrayNames[arrayNames.length - 1]}, ${arrayNames[0]}`;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
//console.log(footballPoints(3,3));

// Desafio 6
function highestCount(numbers) {
  let maior = numbers[0];
  let count = 0;
  for (let i = 0; i < numbers.length ; i += 1){
    if (numbers[i] > maior){
      maior = numbers[i];
      count = 1;
    }else if (numbers[i] === maior){
      count += 1;
    }
  }
  return count;
}
//console.log(highestCount([6, 1, 2, 3, 9, 5, 7, 9]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(mouse - cat1) < Math.abs(mouse - cat2)){
    return "cat1";
  }
  else if(Math.abs(mouse - cat1) > Math.abs(mouse - cat2)){
    return "cat2";
  }
  else {
    return "os gatos trombam e o rato foge";
  }
}
//console.log(catAndMouse(0, 3, 2));

// Desafio 8
function fizzBuzz(numbers) {
  for(let i = 0 ; i < numbers.length ; i += 1){
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0){
      numbers[i] = "fizzBuzz";
    }
    else if (numbers[i] % 3 === 0) {
      numbers[i] = "fizz";
    }
    else if (numbers[i] % 5 === 0) {
      numbers[i] = "buzz"
    }
    else {
      numbers[i] = "bug!"
    }
  }
  return numbers;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(str) {
  let convert = {
    "a": '1',
    "e": '2',
    "i": '3',
    "o": '4',
    "u": '5',
  }
  array = str.split('');
  for(let j = 0 ; j < str.length ; j += 1){
    for (let key in convert){
      if (key == str[j]) {
        array[j] = convert[str[j]];
      }
    }
  }
  array = array.join('');
  return array;
}

//console.log(encode("hi there!"));

function decode(str) {
  let convert = {
    "1": 'a',
    "2": 'e',
    "3": 'i',
    "4": 'o',
    "5": 'u',
  }
  array = str.split('');
  for(let j = 0 ; j < str.length ; j += 1){
    for (let key in convert){
      if (key == str[j]) {
        array[j] = convert[str[j]];
      }
    }
  }
  array = array.join('');
  return array;
}
//console.log(decode("h3 th2r2!"));

// Desafio 10
function ordenarPorNome(a, b){
  if(a.tech >= b.tech){
    return 1;
  }else {
    return (-1);
  }
}

function techList(array, nome) {
  let result = [];
  for (let i = 0 ; i < array.length ; i += 1) {
    let aux = {};
    aux.tech = array[i];
    aux.nome = nome;
    result.push(aux);
  }
  result.sort(ordenarPorNome);
  return result;
}

//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
