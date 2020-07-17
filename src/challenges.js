// Desafio 1
function compareTrue(parametro1, parametro2){
  if (parametro1 && parametro2) {
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2
  return area;
}

// Desafio 3
function splitSentence(parametroString) {
  array = parametroString.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  return array[array.lenght-1]+','+array[0])
}

// Desafio 5
function footballPoints(wins, ties){
  pontos = (wins*3)+(ties*1);
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let identificaMaior = 0;
  let numeroRepetido = 0;
  for (let i = 0; i < array.lenght; i += 1){
    if (array[i]>identificaMaior){
      identificaMaior = array[i];
    }
  }
  for (let i = 0; i < array.lenght; i += 1){
    if (array[i]==identificaMaior){
      numeroRepetido += 1;
    }
  }
  return numeroRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if(distanceCat1 < distanceCat2){
    return cat1;
  }else if(distanceCat2 < distanceCat1){
    return cat2;
  }else{
    return resposta = "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  for(let i = 0; i < array.leght; i += 1){
    if(((array[i]%3) == 0)&&((array[i]%5) == 0)){
      return "fizzBuzz";
    }else if((array[i]%5) == 0){
      return "buzz";
    }else if((array[i]%3) == 0){
      return "fizz";
    }else{
      return "bug!";
    }
  }
}

// Desafio 9
function encode(parametro1) {
  for(let i = 0; i < parametro1.lenght; i += 1){
    if(parametro1[i]== "a"){
      parametro1[i].push = 1;
    }else if(parametro1[i]== "e"){
      parametro1[i].push = 2;
    }else if(parametro1[i]== "i"){
      parametro1[i].push = 3;
    }else if(parametro1[i]== "o"){
      parametro1[i].push = 4;
    }else (parametro1[i]== "u"){
      parametro1[i].push = 5;
    }
  }

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
