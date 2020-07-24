// Desafio 1
function compareTrue(value1 , value2) {
  return value1 && value2;
}

//Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}
 
// Desafio 3
function splitSentence(prhase) {
  let splitPhrase = prhase.split(" ");
  return splitPhrase;
}
//Desafio 4
function concatName(names) {
  let lastName = names[names.length - 1];
  let firstName = names[0];
  let lastFirst = `${firstName}, ${lastName}`;
  return lastFirst
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints
}

// Desafio 6
function highestCount(numbersList) {
  let numMaior = 0;
  let count = 0;
  for (let i in numbersList){
    numMaior = 0
    for (let i2 in numbersList) {
      if(numbersList[i] >= numbersList[i2]) {
        numMaior += 1;
      }
    }
    if(numMaior === numbersList.length) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1Mouse = cat1 - mouse;
  let distanciaCat2Mouse = cat2 - mouse;
  if (distanciaCat1Mouse === distanciaCat2Mouse) {
    return "os gatos trombam e o rato foge";
  } else if (distanciaCat1Mouse < distanciaCat2Mouse) {
    return "cat1";
  } else {return "cat2"};
}
console.log(catAndMouse(1, 7, 4));
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
