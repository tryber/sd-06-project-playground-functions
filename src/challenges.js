// Desafio 1 - OK
function compareTrue(boolean1, boolean2) {
  // seu código aqui (iniciando)
  if (boolean1 === true && boolean2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2 - OK
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3 - OK
function splitSentence(stringRecebida) {
  // seu código aqui
  resultado = stringRecebida.split(" ");
  return resultado

}

// Desafio 4 - OK
function concatName(string) {
  // seu código aqui
  primeiroItem = string[0];
  ultimoitem = string[string.length - 1];
  return (ultimoitem + ", " + primeiroItem);
}

// Desafio 5 - OK
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6 - OK
function highestCount(numbers) {
  // seu código aqui
  let maiorNumero = 0;
  for (let i = 0; i < numbers.length; i = i + 1) {
    if (numbers[i] > maiorNumero) {
      maiorNumero = numbers[i];
    }
  }

  let contador = 0;
  for (let i = 0; i < numbers.length; i = i + 1) {
    if (numbers[i] === maiorNumero) {
      contador = contador + 1;
    }
  }
  return contador;
}

// Desafio 7 - OK
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let ditanciaCat1 = Math.abs(mouse - cat1);
  let ditanciaCat2 = Math.abs(mouse - cat2);

  if (ditanciaCat1 === ditanciaCat2) {
    return ("os gatos trombam e o rato foge");
  } else if (ditanciaCat1 < ditanciaCat2) {
    return ("cat1");
  } else {
    return ("cat2");
  }
}

// Desafio 8 - OK
function fizzBuzz(numbers) {
  // seu código aqui
  let retorno = [];
  for (let posicaoAtual = 0; posicaoAtual < numbers.length; posicaoAtual++) {
    if ((numbers[posicaoAtual] % 3 === 0) && (numbers[posicaoAtual] % 5 === 0)) {
      retorno.push("fizzBuzz");
    } else if ((numbers[posicaoAtual] % 3 === 0) && (numbers[posicaoAtual] % 5 !== 0)) {
      retorno.push("fizz");
    } else if ((numbers[posicaoAtual] % 3 !== 0) && (numbers[posicaoAtual] % 5 === 0)) {
      retorno.push("buzz");
    } else {
      retorno.push("bug!");
    }
  }
  return retorno;
}

// Desafio 9
function encode(word) {
  // seu código aqui
  let newWord = [];
  for(i = 0; i < word.length; i += 1){
    if(word[i] === "a"){
        newWord.push("1");
    } else if(word[i] === "e") {
        newWord.push("2");   
    } else if(word[i] === "i") {
        newWord.push("3"); 
    } else if(word[i] === "o") {
        newWord.push("4");      
    } else if(word[i] === "u") {
        newWord.push("5");      
    } else {
        newWord.push(word[i]);
    }
  
  }
  return newWord.join("");
}

function decode(word) {
  // seu código aqui
  let newWord = [];
  for(i = 0; i < word.length; i += 1){
    if(word[i] === "1"){
        newWord.push("a");
    } else if(word[i] === "2") {
        newWord.push("e");   
    } else if(word[i] === "3") {
        newWord.push("i"); 
    } else if(word[i] === "4") {
        newWord.push("o");      
    } else if(word[i] === "5") {
        newWord.push("u");      
    } else {
        newWord.push(word[i]);
    }
  }
  return newWord.join("");
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

