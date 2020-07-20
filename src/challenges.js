// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;  
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}
console.log(calcArea(3, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}
console.log(splitSentence("Hj é sexta, só que tem projeto pro final de semana!"));

// Desafio 4
function concatName(array) {
  let firstName = "";
  let lastName = "";
  for (let index in array) {
    firstName = array[array.length - 1];
    lastName = array[0];
  }
  return firstName + ", " + lastName;
}
console.log(concatName(["Ana", "Pedro", "Julia"]));  

// Desafio 5
function footballPoints(wins, ties) {
  return (wins *3 + ties * 1);
}
console.log(footballPoints(2, 3));


// Desafio 6
function highestCount(array) {
  let hNumber = array[0];
  let count = 0;
  for (let index in array) {
    if (hNumber < array[index]) {
      hNumber = array[index];
    } 
  }
  for (let indexTwo in array) {
    if (hNumber === array[indexTwo]) {
      count += 1;
    }
  }
  return count;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let balanceCat1 = Math.abs((mouse - cat1));
  let balanceCat2 = Math.abs((mouse - cat2));
  if (balanceCat1 > balanceCat2) {
    return "cat2";
  } else if (balanceCat2 > balanceCat1) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(1, 2, 3));

// Desafio 8
function fizzBuzz(array) {
  let arrayOutPut = [];
  let newInPut;    
    for (let index in array) {
       if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
            newInPut = "fizz";
        } else if (array[index] % 3 !== 0 && array[index] % 5 === 0){
            newInPut = "buzz";
        } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
            newInPut = "fizzBuzz";
        } else {
            newInPut = "bug!";
        }
        arrayOutPut.push(newInPut);
        newInPut = ""; 
        }
    return arrayOutPut;    
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));


// Desafio 9
function encode(string) {
    let array = string.split('');
    
    for (let index = 0; index < array.length; index += 1) {
            if ((array[index]) === "a") {             
                array[index] = "1";
            } else if ((array[index]) === "e") {             
                array[index] = "2";
            } else if ((array[index]) === "i") {             
                array[index] = "3";
            } else if ((array[index]) === "o") {             
                array[index] = "4";
            } else if ((array[index]) === "u") {             
                array[index] = "5";
            }
        } 
  
    let arrayString = array.join('');
  return arrayString;  
  }
  console.log(encode("how are you today"));

function decode(stringTwo) {    
    let arrayTwo = stringTwo.split('');
    
    for (let index = 0; index < arrayTwo.length; index += 1) {
        if ((arrayTwo[index]) === "1") {             
            arrayTwo[index] = "a";
        } else if ((arrayTwo[index]) === "2") {             
            arrayTwo[index] = "e";
        } else if ((arrayTwo[index]) === "3") {             
            arrayTwo[index] = "i";
        } else if ((arrayTwo[index]) === "4") {             
            arrayTwo[index] = "o";
        } else if ((arrayTwo[index]) === "5") {             
            arrayTwo[index] = "u";
        }
    } 

let arrayStringTwo = arrayTwo.join('');
return arrayStringTwo;  
}
console.log(decode("h2ll4"));

// Desafio 10
function techList(array, name) {
    let objeto = {};
//let array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
    let arrayTwo = array.sort();
    let arrayThree = [];
    
    //for (let i in arrayTwo) {
    for (let index = 0; index < arrayTwo.length; index += 1) {
    objeto.tech = arrayTwo[index];
    objeto.name = name;
    arrayThree.push(objeto);    
    objeto = {};    
   } 
return arrayThree;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Fabi"));

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length > 11 || array.length < 11) {
      return "Array com tamanho incorreto.";
  } else {
      for (let index in array) {
          let contador = 0;
          if (array[index] < 0 || array[index] > 9) {
              return "não é possível gerar um número de telefone com esses valores";
          } else if (array[index] === array [index + 1]) {
              contador += 1;
              if (contador >= 3) {
                  return "não é possível gerar um número de telefone com esses valores";
              }
          } else {
              let string = "(" + array[0] + array[1] + ")" + array[2] + array[3] + array[4] + array[5] + array[6] + "-" + array[7] + array[8] + array[9] + array[10];
              return string;                
          }      
      }
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) && (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) && (lineC < lineA + lineB) && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(10, 14, 100));

// Desafio 13
function hydrate(string) {

let regex = /\d+/g;
let matches = string.match(regex);
let contador = 0;
  
for (let index in matches) {
    contador = contador + parseInt(matches[index], 10);    
  } if (contador < 2) {
    return contador + " copo de água";
  } else {
    return contador + " copos de água";
  }
}
console.log(hydrate("1 cachaça, 7 cervejas e 2 copo de vinho")); 

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
