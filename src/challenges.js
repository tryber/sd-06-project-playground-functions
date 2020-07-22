// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true;
  }
   else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let word = "";
  let stringArray = [];
  for (i in string){
    if (string[i] !== " "){
      word += string[i];
    }
    else if (string[i] == " "){
      stringArray.push(word);
      word = "";
    }
  }
  stringArray.push(word);
  return stringArray;
}


// Desafio 4
function concatName(array) {
  lastFirst = array[array.length-1] + ", " + array[0] ;
  return lastFirst;
}


// Desafio 5
function footballPoints(wins, ties) {
return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
    let highestNumber = arr[0];
    let count = 0

    for (let i = 0; i < arr.length; i+= 1){
      if (arr[i] > highestNumber) {
        highestNumber = arr[i];
      }
    }

    for (let i = 0; i < arr.length; i+= 1){

      if (arr[i] == highestNumber) {
        count += 1;}
     
      }
      return count
    }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let turnPositiveArray = [cat1, cat2, mouse];
    for (let i in turnPositiveArray) {
      if (turnPositiveArray[i] < 0) {
      turnPositiveArray[i] *= -1;
    }
  }

  function closerToMouse(predator, prey) {
    if (predator > prey) {
      return predator - prey;
    } else if (prey > predator) {
      return prey - predator;
    }

    return 0;
  }

  if (closerToMouse(cat1, mouse) === closerToMouse(cat2, mouse)) {
    return 'cats gonna colide';
  } else if (closerToMouse(cat1, mouse) < closerToMouse(cat2, mouse)) {
    return 'cat1';
  }

  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let arrayString = [];
  for (i=0; i<arrayNumber.length; i++) {
    
    if ((arrayNumber[i] % 3 === 0)&& (arrayNumber[i] % 5 === 0)) {
    arrayString.push("fizzBuzz")
  }  //do if
  else if ((arrayNumber[i] % 3 === 0)&& (arrayNumber[i] % 5 !== 0)) {
    arrayString.push("fizz")
}  // primeiro else if
else if ((arrayNumber[i] % 3 !== 0)&& (arrayNumber[i] % 5 === 0)) {
  arrayString.push("buzz")
} // segundo else if
else {
  arrayString.push("bug!") 
} //else

  } // for
} // function

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

}

// Desafio 12
function triangleCheck() {
}

// Desafio 13
function hydrate() {
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