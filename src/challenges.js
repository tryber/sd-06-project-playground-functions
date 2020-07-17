// Desafio 1
function compareTrue(value1, value2) {
  if( value1 == true && value2 == true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriang;
  areaTriang = (base * height)/2;
 return areaTriang;
}

// Desafio 3
function splitSentence(string) {
  let arrayString =[];
  arrayString = string.split(" ");
return arrayString;
}

// Desafio 4
function concatName(name) {
 let name2 = [];
  for(let index = name.length -1 ; index >= 0 ; index -= 1){
   name2 += name[index];
  }
  return name2;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arra) {
let higherNumber = arra[0];
let qtdNumber = 0;
let bigger=0;

  for(let index = 0; index <= arra.length -1; index +=1 ){
   if(arra[index]>higherNumber){
     bigger = arra[index];
   } 
   if(higherNumber == arra[index]){
     qtdNumber += 1;
   }
  }
  return qtdNumber;
  
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  
  for(let index =0 ; index <= array.length-1; index += 1){
    if(array[index] % 3 == 0 && array[index] % 5 == 0){
      return "fizzBuzz";
    }else if(array[index] % 3 == 0 && array[index] % 5 != 0){
      return "fizz";
    }else if(array[index] % 3 != 0 && array[index] % 5 == 0){
     return "buzz";
    } else{
      return "bug";
    }
  }
}


//cada número da Array que seja divisível por 3, apresente uma string "fizz";
//Para cada número da Array que seja divisível por 5, apresente uma string "buzz";
//Caso o número seja divisível por 3 ou 5, retorne a string "fizzBuzz";
//Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
//Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].

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
