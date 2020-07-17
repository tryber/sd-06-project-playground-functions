// Desafio 1
function compareTrue(aboolean, bboolean) {
  if (aboolean === true && bboolean === true) {
    return true
  }else{
  return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;

  return result;
}

// Desafio 3
function splitSentence(word) {
  let text = word.split(' ',5)
  return text;
}

// Desafio 4
function concatName(array) {
  let concatenado = '';
  for (let i = 0; i < array.length; i += 1) {
    concatenado = array[array.length-1] +", "+ array[0];
  }
  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = wins * 3 + ties;
  return pontosTotais
}

// Desafio 6
function highestCount(numbers) {
	// seu código aqui
	let howMany = 0;
	let highNum = numbers[0];
  
	for (index in numbers) {
	  if (numbers[index] > highNum) {
		highNum = numbers[index]
	  }
	} for (index in numbers) {
	  if (numbers[index] === highNum)
		howMany += 1
	}
	return (howMany)
  }
  
  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for(let i = 0; i <= numbers.length; i += 1){
    if(numbers[i] / 3 === 0){
      result = "fizz";
    }else if (numbers[i] / 5 === 0){
      result = "buzz";
    }else if (numbers[i] / 3 === 0 && numbers[i] / 5 === 0) {
      result = "fizzBuzz"
    }else{
      result = "bug!"
    }
  }
  return result
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
