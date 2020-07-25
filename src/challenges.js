// Desafio 1
function compareTrue(value1 , value2) {
  if ((value1 === true) && (value2 ===true)) {
    return true
  } else {
    return false
  }
}
console.log(compareTrue(true, false));

//Desafio 2
function calcArea(base, heigth) {
  return ((base * heigth) / 2);
}
console.log(calcArea(10, 5));
 
// Desafio 3
function splitSentence(prhase) {
  let splitPhrase = prhase.split(" ");
  return splitPhrase;
}
console.log(splitSentence("Go Trybe"));

//Desafio 4
function concatName(names) {
  let lastName = names.length - 1;
  return (names[lastName] + ", " +names[0]);
}
console.log(concatName(["Aurelio", "Millena", "Lorenzo"]));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints
}
console.log(footballPoints(5, 2));

// Desafio 6
function highestCount(numbersList) {
  let repeatedNumber = 0;
  let highestNumber = numbersList[0];
  for (i in numbersList) {
    if (numbersList[i] > highestNumber) {
      highestNumber = numbersList[i];
    }
  }
    for (i in numbersList) {
      if(numbersList[i] === highestNumber) {
        repeatedNumber+= 1;
      }
    }
  return repeatedNumber;
}
console.log(highestCount([9, 1, 2, 3, 5, 6, 9, 7, 8,]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;
  if (distanciaCat1 < distanciaCat2) {
    return "cat1";
  } else if (distanciaCat2 < distanciaCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge"
  };
}
console.log(catAndMouse(1, 10, 10));

// Desafio 8
function fizzBuzz(array) {
  let returnArray = [];
  for (let index = 0; index < array.length; index +=1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      returnArray.push("fizzBuzz");
    } else if ((array[index] % 3 === 0)) {
      returnArray.push("fizz");
    } else if ((array[index] % 5 === 0)) {
      returnArray.push("buzz");
    } else {returnArray.push("bug!")};
  }
  return returnArray
}
console.log(fizzBuzz([2, 15, 7, 9, 45, 50]));

// Desafio 9
function encode(myString) {
  let codificar = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5' }
  return myString.replace(/[aeiou]/g, m => codificar[m])
}
function decode(myString) {
  let decodificar = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' }
  return myString.replace(/[12345]/g, m => decodificar[m]);
}
console.log(encode("hi there!"));
console.log(decode("h3 th2r2!"));

// Desafio 10
function techList(arrayTech, name) {
  let techList = [];
  let techObject = {};
  for (iten in arrayTech.sort()) {
    techList.push({tech : arrayTech[iten], name : name})
  } if (arrayTech.length < 1) {
    techList = "Vazio!"
  }
  return techList
}
console.log(techList(["java", "php", "html"], "Aurelio"));

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
