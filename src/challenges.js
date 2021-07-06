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
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else if (cat1Distance === cat2Distance){
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  }
}
// Desafio 8
function fizzBuzz(arrayNumber) {
  let arrayString = [];
  for (i=0; i<arrayNumber.length; i++) {
    
    if (arrayNumber[i] % 15 === 0) {
    arrayString.push("fizzBuzz");
  }  //do if
  else if (arrayNumber[i] % 3 === 0) {
    arrayString.push("fizz");
}  // primeiro else if
else if (arrayNumber[i] % 5 === 0) {
  arrayString.push("buzz");
} // segundo else if
else {
  arrayString.push("bug!") 
} //else

  } // for
  return arrayString
} // function
console.log(fizzBuzz([2, 8, 15, 90, 25]));


// Desafio 9
function encode() {
 
    let resultado = string.split('')

      for (let i = 0; i < resultado.length; i += 1) {

       if (resultado[i] === 'a') {
         resultado[i] = '1';
       } else if (resultado[i] === 'e') {
         resultado[i] = '2';
       } else if (resultado[i] === 'i') {
         resultado[i] = '3';
       } else if (resultado[i] === 'o') {
         resultado[i] = '4';
       } else if (resultado[i] === 'u') {
         resultado[i] = '5';
       }
      }
  
      let resultadoFinal = resultado.join('');
      return resultadoFinal;
    }

function decode() {

  let novaString = '';

  for (let caracter in string) {

    if (string[caracter] === '1') {
      novaString += 'a';
    } else if (string[caracter] === '2') {
      novaString += 'e';
    } else if (string[caracter] === '3') {
      novaString += 'i';
    } else if (string[caracter] === '4') {
      novaString += 'o';
    } else if (string[caracter] === '5') {
      novaString += 'u';
    } else {
      novaString += string[caracter];
    }
  }

  return novaString;


}

// Desafio 10
function techList(tecArray, nameUser) {
  if (tecArray.length === 0) {
    return 'The array is empty';
  }

  tecArray.sort();

  let newTecArray = [];

   for (let i = 0; i < tecArray.length; i += 1) {
    let object = {
      tech: tecArray[i],
      name: nameUser,
    };
    newTecArray.push(object);
  }
  return newTecArray;
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