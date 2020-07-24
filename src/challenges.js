// Desafio 1
function compareTrue(value1 , value2) {
  if ((value1 === true) && (value2 ===true)) {
    return true
  } else {return false}
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
  let lastName = names.length - 1;
  return (names[lastName] + ", " +names[0]);
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
  for (let i =0; i < numbersList.length; i += 1){
    if (numMaior <= numbersList[i]) {
      numMaior = numbersList[i];
    }
    for (let i2 =0; i2 <numbersList.length; i2 += 1) {
      if(numMaior === numbersList[i2]) {
        count += 1;
      }
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1Mouse = cat1 - mouse;
  let distanciaCat2Mouse = cat2 - mouse;
  if (distanciaCat1Mouse > distanciaCat2Mouse) {
    return "cat2";
  } else if (distanciaCat2Mouse > distanciaCat1Mouse) {
    return "cat1";
  } else {return "os gatos trombam e o rato foge"};
}
console.log(catAndMouse(1, 10, 10));
// Desafio 8
function fizzBuzz(array) {
  let returnArray = [];
  for (index = 0; index = array.length; index +=1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      returnArray.push("fizzBuzz");
    }
     else if ((array[index] % 3 === 0)) {
      returnArray.push("fizz");
    }
     else if ((array[index] % 5 === 0)) {
      returnArray.push("buzz");
    }
     else {returnArray.push("bug!")};
  }
  return returnArray
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(letrasVogais) {
  let vogaisNumeros = letrasVogais.replace(/a/gi, 1);
  vogaisNumeros = vogaisNumeros.replace(/e/gi, 2);
  vogaisNumeros = vogaisNumeros.replace(/i/gi, 3);
  vogaisNumeros = vogaisNumeros.replace(/o/gi, 4);
  vogaisNumeros = vogaisNumeros.replace(/u/gi, 5);

  return vogaisNumeros;
} 

function decode(numeros) {
  let trocandopNumeros = numeros.replace(/1/gi, 'a');
  trocandopNumeros = trocandopNumeros.replace(/2/gi, 'e');
  trocandopNumeros = trocandopNumeros.replace(/3/gi, 'i');
  trocandopNumeros = trocandopNumeros.replace(/4/gi, 'o');
  trocandopNumeros = trocandopNumeros.replace(/5/gi, 'u');

  return trocandopNumeros;
}

// Desafio 10
function techList(technologylist, name) {
  if (technologylist.length === 0) {
    return "Vazio!";
  }
  let listObject = [];
  technologylist.sort ();
  for (let contador = 0; contador < technologylist.length; contador +=1) {
    let tech = technologylist[contador];
    listObject.push({tech, name});
  }
  return listObject;
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
