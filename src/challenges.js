// Desafio 1
function compareTrue(a, b){

  if (a===true && b===true) { return true; }

  return false;
}

// Desafio 2
function calcArea(base, height){

  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string){

  return string.split(" ");
}

// Desafio 4
function concatName(arrayOfStrings){

  const firstName = arrayOfStrings[0];
  const lastName = arrayOfStrings[arrayOfStrings.length-1];

  let result = lastName + ", " + firstName;

  return result;
}

// Desafio 5
function footballPoints(wins,ties){

  let points = (wins * 3) + ties;

  return points;
}

// Desafio 6
function highestCount(array) {

  let highestNumber = 0;
  let counter = 0;

  for(let i = 0; i < array.length; i++) {
    if (array[i] > highestNumber) {
      highestNumber = array[i];
    }
  }

  for(let i = 0; i < array.length; i++) {
    if(array[i] == highestNumber) {
      counter += 1;
    }
  }

  return counter
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {

  let distCat1 = Math.abs(mouse - cat1)
  let distCat2 = Math.abs(mouse - cat2)

  if (distCat1 < distCat2) { return "cat1" }

  if (distCat1 > distCat2) { return "cat2" }

  return "os gatos trombam e o rato foge"
}

// Desafio 8
function fizzBuzz(array) {

  let result = []
  
  for(let j=0; j<array.length; j++) {

    if (array[j]%3==0 && !(array[j]%5==0)) {
      result.push("fizz")
    } else
  
    if (!(array[j]%3==0) && array[j]%5==0) {
      result.push("buzz")
    } else
  
    if (array[j]%3==0 && array[j]%5==0) {
      result.push("fizzBuzz")
    } else
  
    if (!(array[j]%3==0) && !(array[j]%5==0)) {
      result.push("bug!")
    }

  }

  return result
}

// Desafio 9
function encode(string) {

  string = string.split("");
  let encoded = "";

  for (let i = 0; i < string.length; i++) {
    switch(string[i]){
      case "a":
        string[i] = 1;
        break;
        
        case "e":
          string[i] = 2;
          break;

      case "i":
        string[i] = 3;
        break;

      case "o":
        string[i] = 4;
        break;

      case "u":
        string[i] = 5;
        break;
    }
  }

  for (let i = 0; i< string.length; i++) {
    encoded += string[i];
  }

  return encoded;
}
function decode(string) {

  string = string.split("");
  let decoded = "";

  for (let i = 0; i < string.length; i++) {
    switch(string[i]){
      case "1":
        string[i] = "a";
        break;
        
      case "2":
        string[i] = "e";
        break;

      case "3":
        string[i] = "i";
        break;

      case "4":
        string[i] = "o";
        break;

      case "5":
        string[i] = "u";
        break;
    }
  }

  for (let i = 0; i< string.length; i++) {
    decoded += string[i];
  }

  return decoded;
}

// Desafio 10
function techList(array,name) {

  if (array.length == 0) { return "Vazio!" }
  else {
    let result = [];
    array = array.sort();

    for (let i = 0; i < array.length; i++) {
      result.push(
        {
          tech: `${array[i]}`,
          name: `${name}`
        }
      )
    }

   return result
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  let number = "";

  if (array.length != 11) { return "Array com tamanho incorreto." }
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 9 || array[i] < 0) { return "não é possível gerar um número de telefone com esses valores" }

    let counter = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] == array[i]) {
        counter += 1;
      }

      if ( counter >= 3) { return "não é possível gerar um número de telefone com esses valores" }
    }
  }

  number = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;

  return number;
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {

  let sideA = false;
  let sideB = false;
  let sideC = false;

  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    sideA = true;
  }

  if ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC))) {
    sideB = true;
  }

  if ((lineC < lineB + lineA) && (lineC > Math.abs(lineB - lineA))) {
    sideC = true;
  }


  if (sideA && sideB && sideC) {
    return true;
  }

  return false
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
