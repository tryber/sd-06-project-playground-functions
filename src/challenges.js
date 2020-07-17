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
  let string = itens[itens.length - 1] + ", " + itens[0]
  return string
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
  let posicaoCat1 = 0;
  let posicaoCat2 = 0;
  let pegaOuNaoPega = ""
// os valores (mouse, cat1, cat2) não necessariamente incorrem em uma subtração de resultado positivo. Há que considerar a unidade da posição.
  if(mouse > cat1){
    posicaoCat1 = mouse - cat1
  } else if(mouse < cat1){
    posicaoCat1 = cat1 - mouse
  } // valor da posição do gato1
  if(mouse > cat2){
    posicaoCat2 = mouse - cat2
  } else if( mouse < cat2){
    posicaoCat2 = cat2 - mouse
  }// valor da posição do gato2

  if(posicaoCat2 > posicaoCat1){
    pegaOuNaoPega = "cat1"
  } else if ( posicaoCat1 > posicaoCat2){
    pegaOuNaoPega = "cat2"
  } else {
    pegaOuNaoPega = "os gatos trombam e o rato foge"
  }// quem poderia pegar o rato ou se nenhum pega
  return pegaOuNaoPega

}

// Desafio 8
function fizzBuzz(valoresFizzBuzz) {
  let novoFizzBuzz = []
  for(let indice = 0; indice < valoresFizzBuzz.length; indice += 1){
    if(valoresFizzBuzz[indice] % 3 === 0 && valoresFizzBuzz[indice] % 5 === 0){
      novoFizzBuzz.push("fizzBuzz")
    } else if(valoresFizzBuzz[indice] % 3 === 0){
      novoFizzBuzz.push("fizz")
    } else if(valoresFizzBuzz[indice] % 5 === 0){
      novoFizzBuzz.push("buzz")
    } else {
      novoFizzBuzz.push("bug!")
    }
  }
  return novoFizzBuzz
}

// Desafio 9
function encode(fraseParaNumero) {
  arrayFraseNum = fraseParaNumero.split("")
  for(let indice = 0; indice < arrayFraseNum.length; indice += 1){
    switch (arrayFraseNum[indice]) {
      case "a":
        arrayFraseNum[indice] = 1;
        break;
      case "e":
        arrayFraseNum[indice] = 2;
        break;
      case "i":
        arrayFraseNum[indice] = 3;
        break;
      case "o":
        arrayFraseNum[indice] = 4;
        break;
      case "u":
        arrayFraseNum[indice] = 5;
        break;
    }
  }
  let stringNumeros = arrayFraseNum.join('')
  return stringNumeros
}

function decode(numeroParaFrase) {
  arrayNumFrase = numeroParaFrase.split("")
  for(let indice = 0; indice < arrayNumFrase.length; indice += 1){
    switch (arrayNumFrase[indice]) {
      case "1":
        arrayNumFrase[indice] = "a";
        break;
      case "2":
        arrayNumFrase[indice] = "e";
        break;
      case "3":
        arrayNumFrase[indice] = "i";
        break;
      case "4":
        arrayNumFrase[indice] = "o";
        break;
      case "5":
        arrayNumFrase[indice] = "u";
        break;
    }
  }
  let stringFrase = arrayNumFrase.join('')
  return stringFrase
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
