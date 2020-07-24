// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true){
    return true;
  } else {
    return false;
  }
  } return false;
// console.log(compareTrue(valor1,valor2));
// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area
}
//console.log(calcArea(5, 10));

// Desafio 3
function splitSentence(testaString) {
  let verificaString = testaString.split(' ');
  return (verificaString);
}
//let resultSplit = splitSentence('Go Trybe');
//console.log(resultSplit);


// Desafio 4
function concatName(arrayNomes) {
  let arrayPrimeiroUltimo = (arrayNomes[arrayNomes.length - 1]) + ', ' + arrayNomes[0];
  return arrayPrimeiroUltimo;
}
let arrayNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let concatenarNomes = concatName(arrayNomes);
console.log(concatenarNomes);

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + (ties * 1);
  return pontuacao;
}
//let pontuacao = footballPoints(3, 2);
//console.log(pontuacao);

// Desafio 6
function highestCount(lista) {
  let maior = lista[0];
  for( let indice of lista ){
    if (indice > maior){
      maior = indice;
    }
  }
  let contador = 0;
  for (let indice of lista){
    if (indice === maior){
      contador += 1;
    }
  }
  return contador;
}
let numbers = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(numbers));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
    return 'os gatos trombam e o rato foge';
}

// Desafio 8
let arrayNumeros=[2, 3, 5, 15];
function fizzBuzz(arrayNumeros) {
  let newArrayNumeros=[ ];
  for(let indice in arrayNumeros){ 
    if (arrayNumeros[indice] % 3 === 0 && arrayNumeros[indice] % 5 === 0) {
      newArrayNumeros[indice] = 'fizzBuzz';
    } else if(arrayNumeros[indice] % 3 === 0) {
      newArrayNumeros[indice] = 'fizz';
    } else if (arrayNumeros[indice] % 5 === 0) {
      newArrayNumeros[indice] = 'buzz';
    } else {
      newArrayNumeros[indice] = 'bug!';
    }
  }
  return newArrayNumeros;
}
console.log(fizzBuzz(arrayNumeros));

// Desafio 9

function encode() {
//seu codigo aqui
}
console.log(encode());
function decode() {
// seu código aqui
}

// Desafio 10
function techList(tec, name) {
  let object = [];
  if (tec.length === 0) {
    return 'Vazio!';
  }
  for (let indice = (tec.length - 1); indice >= 0; indice -= 1) {
    object[indice] = { tech: tec[indice] };
    object[indice].name = name;
  }
  object.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  });
  return object;
}

// Desafio 11
function generatePhoneNumber(arrayTelefone) {
    //regra => não pode se repetir um mesmo indice por mais de 3 vezes ou é aceitos até duas repetições
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB + lineC) && lineA > Math.abs(lineB - lineC)){
    return true;
  } else if (lineB < Math.abs(lineA + lineC) && lineB > Math.abs(lineA - lineC)){
    return true;
  } else if (lineC < Math.abs(lineA + lineB) && lineC > Math.abs(lineA - lineB)){
    return true;
  }
  return false;
}
//console.log(triangleCheck(0,0,0));

// Desafio 13
function hydrate(){
  let total = 0;
  let copos = string.match(/\d/g);
  for (let i = 0; i < i.copos.length; i += 1){
    total += Number(copos[i]); 
  }
  if(total === 1){
    return `${total} copo de água`;
  }
  return `${total} copos de água`;
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
