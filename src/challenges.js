// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let result = false;
  if(a===true && b===true){
    result = true;
  }else{
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height)/2;
  return area;

}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = [];
  let save = "";
  for(let cont=0;cont<string.length;cont++){
    if(string[cont]===" " || cont==string.length-1){
      if(cont==string.length-1){
        save += string[cont];
        array.push(save);
        save = "";
      }else {
        array.push(save);
        save = "";
      }
    }
    else{
      save += string[cont];
    }
  }
  return array;
}
console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = "";
  let ending = "";
  let begin = "";
  for(let i in array){
    if(i==0){
      ending = array[i];
    }else if(i==array.length-1){
      begin = array[i];
    }
  }
  string = begin;
  string += ", "+ending;
  return string;

}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

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
