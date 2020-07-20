//Desafio 1
function compareTrue( param1 , param2 ) {
  if (param1 === true && param2 === true) {
    return true;
   } else {
    return false;
  }
}
// Desafio 2
function calcArea( base , height ) {
let areaDoTri = (base * height) / 2;
return areaDoTri
}
// Desafio 3
function splitSentence(string) {
return string.split(" ");
}
// Desafio 4
function concatName( StringArray ) {
  return StringArray[StringArray.length-1] + ", " + StringArray[0];
  }
// Desafio 5
function footballPoints(wins, ties) {
let pontos = 3*wins + 1*ties;
return pontos
}
// Desafio 6
function highestCount(ArrayDeNum) { 
var maior = 0;
for (let i = 0; i < ArrayDeNum.length; i = i + 1) {
  if (ArrayDeNum[i] > maior) {
    maior = ArrayDeNum[i];
  }
}
var contador = 0;
for (let i = 0; i < ArrayDeNum.length; i = i + 1) {
  if (ArrayDeNum[i] == maior) {
    contador = contador + 1;
  }
}
return contador; 
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 < distanciaCat2){
    return "cat1";
   } else if (distanciaCat1 > distanciaCat2) {
     return "cat2";
   } else {
     return "os gatos trombam e o rato foge";
   }
}
// Desafio 8
function fizzBuzz(n) {
  let fizzBuzz = [];
    n.forEach(numero => {
    
    if (numero % 3==0 && numero % 5==0) {
      fizzBuzz.push("fizzBuzz");
    } else if (numero % 3 === 0) {
      fizzBuzz.push("fizz");
    } else if (numero % 5 === 0) {
      fizzBuzz.push("buzz");
    } else {
      fizzBuzz.push("bug!")
    }
  }); 
    return fizzBuzz;
  }
// Desafio 9
function encode() {
// seu código aqui
}
 
function decode() {
// seu código aqui
}
// Desafio 10
function techList(TechArray) {
if (TechArray.length === 0) {
  return 'Vazio!';
}
TechArray.sort();
let objectTech = [];
for (let index = 0; i < TechArray.length; index += 1) {
  objectTech.push({
    tech: TechArray[index],
    name: 'Vinicin',
  });
}
return objectTech;
}
// Desafio 11
function generatePhoneNumber() {
// seu código aqui
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
  return true;
} else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
  return true;
} else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
  return true;
}
return false;
}
// Desafio 13
function hydrate(bebidas) {
let array = bebidas.replace(/[^0-9]/g, '');
let sum = 0;
let frase = '';
for (let index in array){
  if (sum >= 0) {
  sum += parseInt(array[index], 10);
  frase = (sum === 1 ? ' copo de água' : ' copos de água');
}
}
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