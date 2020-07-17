// Desafio 1
function compareTrue(param1, param2) {
  if(param1 && param2){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(nomeCompleto) {
  let nome = nomeCompleto[0] + ', ' + nomeCompleto[nomeCompleto.length-1];
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3)+ties;
}

// Desafio 6
function highestCount(numeros) {
  let maior = numeros[0];
  let cont = 0;
  for(index in numeros){
    if(numeros[index] > maior){
      maior = numeros[index];
    }
  }
  for(index in numeros){
    if(maior === numeros[index]){
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(mouse - cat1 > mouse - cat2){
    return 'cat2';
  }else
  if(mouse - cat1 < mouse - cat2){
    return 'cat1';
  }else{
    return 'os gatos trombam e o rato foge';
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

console.log('Exercício 1: ' + compareTrue(true, true));

console.log('Exercício 2: ' + calcArea(30,30));

console.log('Exercício 3: ' + splitSentence('go Trybe'));

console.log('Exercício 4: ' + concatName(['Vagner','Pereira','de','Sousa']));

console.log('Exercício 5: ' + footballPoints(8,4));

console.log('Exercício 6: ' + highestCount([9, 1, 2, 3, 9, 5, 7]));

console.log('Exercício 7: ' + catAndMouse(10, 8, 7));

console.log('Exercício 8: ' );

console.log('Exercício 9: ' );

console.log('Exercício 10: ' );

console.log('Exercício 11: ' );

console.log('Exercício 12: ' );

console.log('Exercício 13: ' );



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
