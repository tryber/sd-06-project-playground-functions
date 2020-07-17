// Desafio 1
let valor1, valor2;
function compareTrue(valor1, valor2) {
  if( valor1 && valor2 === true){
    return true;
  }else{
    return false;
  }
}
//console.log(compareTrue(valor1,valor2));


// Desafio 2
let base;
let altura;
function calcArea(base,altura) {
  let area = (base*altura)/2;
  return area
}
//console.log(calcArea(5, 10));

// Desafio 3
function splitSentence(testaString) {
  //testaString = "Go Trybe"

}



// Desafio 4
//let arrayNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName() {
  return arrayPrimeiroUltimo = (arrayNomes[arrayNomes.length -1]) + "," + arrayNomes[0];
}
//console.log(concatName());

// Desafio 5
function footballPoints(ties, wins) {
  let pontuacao = (ties * 1) + (wins * 3);
  return pontuacao;
}
//console.log(footballPoints(2,3));


// Desafio 6

function highestCount() {
  //seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 > distanciaCat2){
    return "cat2";
  }else if (distanciaCat1 < distanciaCat2){
    return "cat1";
  }else{
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let newArrayNumeros=[];
  for (let indice in arrayNumeros){
    if ( arrayNumeros[i] % 3 === 0 && arrayNumeros[i] % 5 === 0){
      newArrayNumeros[i] = "fizzBuzz";
    }else if( arrayNumeros[i] % 3 === 0){
      newArrayNumeros[i] = "fizz";
    }else if ( arrayNumeros[i] % 5 === 0){
      newArrayNumeros[i] = "buzz";
    }else{
      newArrayNumeros[i] = "bug!";
    }
  }
  return newArrayNumeros;
}
  console.log(fizzBuzz(arrayNumeros));

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
