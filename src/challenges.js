// Desafio 1
function compareTrue(value1, value2) {
  if (value1 == true && value2 == true) {
    return true
  }  else { 
    return false
  }
}

  console.log(compareTrue(true,true));

  // Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(" ");
}
console.log (splitSentence("Oi eu sou o Matheus Carvalho"));


// Desafio 4
function concatName(firstLast) {
  // seu código aqui
  let newString = firstLast[firstLast.length - 1] + " , " + firstLast[0];
  return newString;
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
      let heighestNumber = returnHighestNumberFromArray(arr)
      let count = 0;
        for (let index =0; index < arr.length; index += 1) {
           if (heighestNumber === arr[index]){
         count += 1;
       }
    }
     return count;
  
     } 

  function returnHighestNumberFromArray(array){
    let heighestNumber = array [0];
    for(let index = 0; index < array.length; index +=1){
      if(array[index] . heighestNumber){
        heighestNumber = array[index];
      }
    }
  
    return heighestNumber
  }

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
    let distanceFirst = Math.abs(mouse - cat1);
    let distanceSecond = Math.abs(mouse - cat2);
      if(distanceFirst < distanceSecond){
        return "cat1";
      } else if (distanceSecond === distanceFirst){
        return "the cats hit each other and the mouse scapes";
      } else {
        return "cat2";
      }
  }


// Desafio 8
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  let stArray = [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] % 15 === 0){
      stArray.push("fizzBuzz");
    } else if (arrayNumbers[i] % 3 === 0) {
      stArray.push("fizz");
    } else if (arrayNumbers[i] % 5 === 0) {
      stArray.push("buzz");
    } else {
      stArray.push("bug!");
    }
  }
  return stArray;
}
console.log(fizzBuzz([4, 8, 15, 95, 45]));

// Desafio 9
function encode(string) {
  // seu código aqui
  let newString = " ";
  for (let char in string) {
    if (string[char] === "a") {
      newString += "1";
    } else if (string[char] === "e") {
      newString += "2";
    } else if (string[char] === "i") {
      newString += "3";
    } else if (string[char] === "o") {
      newString += "4";
    } else if (string[char] === "u") {
      newString += "5";
    } else {
      newString += string[char];
    }
  }
  return newString;
}
function decode() {
  // seu código aqui
  let newString = " ";
  for (let char in string) {
    if (string[char] === "1") {
      newString += "a";
    } else if (string[char] === "2") {
      newString += "e";
    } else if (string[char] === "3") {
      newString += "i";
    } else if (string[char] === "4") {
      newString += "o";
    } else if (string[char] === "5") {
      newString += "u";
    } else {
      newString += string[char];
    }
  }
  return newString;
}
 console.log(decode())


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
