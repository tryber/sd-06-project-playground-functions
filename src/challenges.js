// Desafio 1
function compareTrue(parametro1, parametro2) {
  let resultado = parametro1 && parametro2;
    return resultado;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;

return resultado;
}
console.log(calcArea(10, 20));

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(" ");
return resultado;
}
console.log(splitSentence( "vamos comer um sanduba"))

// Desafio 4
function concatName(arrayDeStrings) {
  var resultado = arrayDeStrings[arrayDeStrings.length -1]+ ", " + arrayDeStrings[0];
  return resultado;
}
console.log(concatName(["izelda","jose","maria"]));


// Desafio 5
function footballPoints(wins,ties) {
  var resultado = (wins * 3) + ( ties * 1);
  return resultado;
}
console.log(footballPoints(3,2));

// Desafio 6
function highestCount(arrayDeNumeros) {
 var maiorNumero = arrayDeNumeros[0]; 
 let quantidade = 0;
  for ( var indice = 0; indice < arrayDeNumeros.length; indice ++){
  if ( maiorNumero < arrayDeNumeros[indice]){
    maiorNumero = arrayDeNumeros[indice];
  } }
  for (let indice = 0; indice < arrayDeNumeros.length ; indice = indice + 1){
    if ( maiorNumero == arrayDeNumeros[indice]){
    quantidade += 1;
  }}

    return quantidade;
  }
console.log(highestCount([3,2,5,7,8,4,8,7,8]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = 0;
  let gatod1 = mouse - cat1;
  let gatod2 = mouse - cat2; 
  
  if ( gatod2 < gatod1){ 
    resultado = "cat2";} else if 
    ( gatod1 < gatod2){
    resultado = "cat1";} else if
  (gatod2 = gatod1) 
     {resultado = "Os gatos trombam e o rato foge";}
 return resultado; 
  } 
 console.log(catAndMouse(0,1,2))

// Desafio 8
function fizzBuzz(array8) {
  let resultado = [];
  for ( indice = 0; indice < array8.length; indice = indice +1 ){
   if (array8[indice] % 5 ==0 && array8[indice] % 3 == 0) {
      resultado[indice] = "fizzBuzz";} 
    else if (array8[indice] % 3 ==0){
      resultado[indice] = "fizz";
    } else if (array8[indice] % 5 ==0){
      resultado[indice] = "buzz";
    } else  { resultado[indice] = "bug!";}
      
    }
    return resultado;
  }
console.log(fizzBuzz([2,7,11]))


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
