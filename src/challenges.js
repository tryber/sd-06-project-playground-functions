// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true){
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura)/2
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ")
}

// Desafio 4
function concatName(itens) {
  return [itens[itens.length - 1],itens[0]]
}

// Desafio 5
function footballPoints(wins, ties) {
  let valorVitorias = wins * 3;
  let valorEmpates = ties;
  let pontos = valorVitorias + valorEmpates;
  return pontos
}

// Desafio 6
function highestCount(valores) {
  let maiorNumero = 0;
  let quantasVezesMaior = 0;
  for(let indice = 0; indice < valores.length; indice += 1){
    if(valores[indice] > maiorNumero){
      maiorNumero = valores[indice]
    }
  }
  for(let posicao = 0; posicao < valores.length; posicao +=1){
    if(valores[posicao] === maiorNumero){
       quantasVezesMaior += 1
    }
  }
  return quantasVezesMaior
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(mouse - cat1 > mouse - cat2 || mouse === cat2){
    return cat2
  }else if(mouse - cat1 < mouse - cat2 || mouse === cat2){
    return cat1
  }else if(cat1 === cat2){
    return "os gatos trombam e o rato foge"
  }
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
