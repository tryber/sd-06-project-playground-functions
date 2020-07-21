// Desafio 1 //iniciando
function compareTrue(num1, num2) {
  // seu código aqui
  if(num1 === true && num2 === true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return(base * height) /2;

}

// Desafio 3
function splitSentence(strSplit, separador) {
  // seu código aqui
let strArray = strSplit.split(separador)
return (strArray.join(', '));
}




// Desafio 4
function concatName() {
 let s= ["primeiro", "feiticeiro", "celeiro", "terceiro", "janeiro"];
 let f=s[0];  
 let l=s[s.length-1];
 
 console.log("First element is "+ f);  
 console.log(" Last element is "+ l);  
}concatName()

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
let pontos = (win *3) + ties;
return pontos;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  for(let i = 0; i< array.lenght; i+=1){
    return maiorNumero
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let distanciaPrimeiro = mouse - cat1;
let distanciaSegundo = mouse - cat2;
  if(distanciaPrimeiro < distanciaSegundo){
    return "cat1";
  } else if (distanciaSegundo === distanciaPrimeiro){
    return "os gatos trombam e o rato foge";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(numerosArray) {
  // seu código aqui
  let strArray = [];
  for (i=0; i<numerosArray.lenght; i+=1)
    if((numerosArray[i] % 3 === 0) && (numerosArray[i]% 5 === 0)){
      strArray.push = ("fizzBuz")
    } else if ((numerosArray[i] % 3 === 0) && (numerosArray[i]% 5 !== 0)){
    strArray.push = ("fizz")
    } else if ((numerosArray[i] % 3 !== 0) && (numerosArray[i]% 5 === 0)){
      strArray.push = ("buzz")
    } else {
      strArray.push = ("bug!")
    }
    return strArray;
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
function generatePhoneNumber(arrayDeNumeros) {
  let cel = 0;
  let lista = arrayDeNumeros.sort();
  let repetidos = 0;
  for(let i = 0; i < lista.lenght; i++){
    if(lista[i] === lista[i-1]){
      repetidos += 1;
    }
  }
  if(arrayDeNumeros !== 11){
    return "tamanho incorreto";
  } else if (repetidos > 2){
    return "nao e possivel gerar um numero com esses valores";
  } else {
    for(let j = 0; j < arrayDeNumeros.lenght; j++){
      if(arrayDeNumeros[j]<0 || arrayDeNumeros[j>9]){
        return "nao e possivel geral um numero de telefone com esses valores";
      }
    }
  } 
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

function Gfg() {  
  let s= ["Geeks", "for", "geeks", "computer", "science"];
 let f=s[0];  

 let l=s[s.length-1];  

 console.log("First element is "+ f);  
 console.log("<br> Last element is "+ l);  
 }  
Gfg();