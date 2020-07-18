// Desafio 1
function compareTrue(a,b) {
  let resultado = a && b;
  return resultado;
}
console.log(compareTrue(false,false));
// Desafio 2
function calcArea(base,height) {
  let area = base * height /2;
  return area;
}
console.log(calcArea(20,20));

// Desafio 3
function splitSentence(frase) {
  frase = frase.split(" ");
  return frase;
}
console.log(splitSentence("comer bem"));

// Desafio 4
function concatName(nomes) {
  let novoNome = "";
  for(let chave in nomes){
      if(chave == 0){
        novoNome += nomes[(nomes.length-1)-chave]+", ";
      }
      if(chave == nomes.length-1){
      novoNome += nomes[(nomes.length-1)-chave];
      }
  }
  return novoNome;  
}
nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(nomes));

// Desafio 5
function footballPoints(wins,ties) {
  let totalPontos = (wins*3) + (ties*1);
  return totalPontos;
}
console.log(footballPoints(3,4));

// Desafio 6
function highestCount(numerosSortidos) {
  let aux = numerosSortidos[0];
  let numRepetido = 0;
  for(posicao in numerosSortidos){
    if(aux < numerosSortidos[posicao]){
      aux = numerosSortidos[posicao];
    }
  }
  for(posicao in numerosSortidos){
    if(aux == numerosSortidos[posicao]){
      numRepetido += 1;
    }
  }
  return numRepetido;
}
numerosSortidos = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(numerosSortidos));
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
   ataqueCat1 = mouse - cat1;
   ataqueCat2 = mouse - cat2;
  if(ataqueCat1 < 0 ){
    ataqueCat1 = valorPositivo(ataqueCat1);
  }
  if(ataqueCat2 < 0){
    ataqueCat2 = valorPositivo(ataqueCat2);
  }
  if(ataqueCat1<ataqueCat2){
    return "cat1";
  }else if(ataqueCat1==ataqueCat2){
    return "os gatos trombam e o rato foge";
  }else{
    return "cat2";
  }

}

function valorPositivo(negativo){
  positivo = negativo + (negativo*-2);
  return positivo;
}
console.log(catAndMouse(1,0,2));
// Desafio 8
function fizzBuzz(numbersChoose) {
  transforma = [];
  for( index in numbersChoose){
    if(numbersChoose[index] %3 == 0 && numbersChoose[index] %5 == 0){
      transforma[index] = "fizzBuzz";
    }else if(numbersChoose[index] %5 == 0 && numbersChoose[index] %3 != 0){
      transforma[index] = "buzz";
    }else if(numbersChoose[index] %3 == 0 && numbersChoose[index] %5 != 0){
      transforma[index] = "fizz";
    }else{
      transforma[index] = "bug!"; 
    }
  }
  return transforma;
}
arrayNumbers = [2, 15, 7, 9, 45];
console.log(fizzBuzz(arrayNumbers));

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
