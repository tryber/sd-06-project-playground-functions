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
console.log(strArray.join(', '));
}
let minhaString = "faz funcionar essa porcaria de codigo"  
let space = " "

splitSentence(minhaString, space)



// Desafio 4
function concatName() {
  // seu código aqui
  let string = ["jucielei, Roberto, Juliano"];
  let f=0;
  let l=string[string.lenght-1];
  console.log("primeiro item e: "+f );
  console.log("ultimo elemento: "+l);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
let pontos = (win *3) + ties;
return pontos;
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
