// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado = false;
  if ((valor1 === true) && (valor2 === true)) {
    resultado = true;
  }
  else {  
    resultado;
  }
  return resultado;
}
console.log(compareTrue(true, true));

// Desafio 2
  let a = 10;
  let b = 5;
function calcArea(base, height) {
  let resultadoArea = (base * height) / 2;
  return resultadoArea;
} 
console.log(calcArea(a, b));

// Desafio 3
function splitSentence(frase) {
  let espaco = frase.split(' ');
  return espaco; 
}
console.log(splitSentence('Keila Julia Matheus')) //teste

// Desafio 4
let myArray = ['Keila', 'Matheus', 'Julia'] //teste p/ saber se está rodando 
function concatName(parametro) {
  let numberArray = parametro.length -1
  console.log(parametro[numberArray] + ", " + parametro[0]); //teste
  return(parametro[numberArray] + ", " + parametro[0]);
}
concatName(myArray); //teste

// Desafio 5
let vitorias = 5;
let empate = 5;
function footballPoints(wins, ties) {
  let resultadoVitoria = wins * 3;
  let resultadoEmpate = ties;
  console.log((resultadoVitoria) + (resultadoEmpate));
  return((resultadoVitoria) + (resultadoEmpate));
}
footballPoints(vitorias, empate);

// Desafio 6
let arrayNumeros = [8, 9, 3, 4, 11, 10, 11];

function highestCount(meuNumero) {
  let maiorNumero = 0;
  let contador = 0;
  //for p/ saber qual o maior n°
  for(let i = 0; i < meuNumero.length; i += 1) { 
    if(maiorNumero <= meuNumero[i]) {
      maiorNumero = meuNumero[i];
    }
  } 
  console.log(maiorNumero);
//for p/ ver quantas vezes se repete 
  for(let j = 0; j <meuNumero.length; j += 1) {
    if(maiorNumero === meuNumero[j]) {
      contador += 1;
    }
  }
  console.log(contador);
  return(contador);
}
  highestCount(arrayNumeros);
 

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
