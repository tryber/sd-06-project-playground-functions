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
  let newString = firstLast[firstLast.length - 1] + ", " + firstLast[0];
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
  
     // Responsabilidade:
     // Encontrar quantas vezes o maior numero se repete
  
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
        return 'cat1';
      } else if (distanceSecond === distanceFirst){
        return 'os gatos trombam e o rato foge';
      } else {
        return 'cat2';
      }
    }


// Desafio 8
function fizzBuzz(myArray) {
  // seu código aqui
    let arrayFizzBuzz = [];
    for (let i = 0; i < myArray.length; i += 1) {
      let result = 'bug!';
      if ((myArray[i] % 3 === 0) && (myArray[i] % 5 === 0)) {
        result = 'fizzBuzz';
      } else if (myArray[i] % 3 === 0) {
        result = 'fizz';
      } else if (myArray[i] % 5 === 0) {
        result = 'buzz';
      }
      arrayFizzBuzz.push(result);
    }
    return arrayFizzBuzz;
  }

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(myArray, myName) {
  // seu código aqui
    let arrayObj = [];
    if (myArray.length === 0) {
      arrayObj = 'Vazio!';
    } else {
      myArray.sort();
      for (let i = 0; i < myArray.length; i += 1) {
        let obj = {
          tech: myArray[i],
          name: myName,
        }
        arrayObj.push(obj);
      }
    }
    return arrayObj;
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
function hydrate(myDrink) {
  // seu código aqui
    let myNumbers = myDrink.match(/\d+/g).map(Number);
    let sumNumbers = 0;
    for (let i = 0; i < myNumbers.length; i += 1) {
      sumNumbers += myNumbers[i];
    }
    let result = '';
    if (sumNumbers === 1) {
      result = '1 copo de água';
    } else {
      result = `${sumNumbers} copos de água`;
    }
    return result;
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
