// Desafio 1
function compareTrue(v1, v2) {
  // seu código aqui
  if (v1 === true && v2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let ultimoPrimeiro = '';
  ultimoPrimeiro += array[array.length - 1] + ', ' + array[0]
  return ultimoPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitoria = wins * 3;
  let empate = ties;
  return vitoria + empate;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highest = 0;
  for (let number of array) {
    if (number > highest) {
      highest = number;
    }
  }
  let times = 0;

  for (let number of array) {
    if (highest === number) {
      times += 1;
    }
  }
  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge'
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1'
  } else (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)); {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayResultado = [];
  for(let i=0;i < array.length;i+=1){
    if((array[i]%3===0) && (array[i]%5===0)){
    arrayResultado.push('fizzBuzz');
    }else if(array[i]%3===0){
    arrayResultado.push('fizz');
    }else if(array[i]%5===0){
    arrayResultado.push('buzz');
    }else{
    arrayResultado.push('bug!');
    }
  }
  return arrayResultado;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let encodeArray = string.split('')

  for (let index in encodeArray) {
    switch (encodeArray[index]){
      case'a':
        encodeArray[index] = 1
        break;
      case'e':
        encodeArray[index] = 2
        break;
      case'i':
        encodeArray[index] = 3
        break ;
      case'o':
        encodeArray[index] = 4
        break;
      case'u':
        encodeArray[index] = 5
        break;
    }
  }
  let encoded = encodeArray.join("");
  return encoded;
}

function decode(encoded) {
  // seu código aqui
  let decodeArray = encoded.split('')

  for (let index in decodeArray) {
    switch (decodeArray[index]) {
      case'1':
        decodeArray[index] ='a'
        break;
      case'2':
        decodeArray[index] = 'e'
        break;
      case'3':
        decodeArray[index] = 'i'
        break;
      case'4':
        decodeArray[index] = 'o'
        break;
      case'5':
        decodeArray[index] = 'u'
        break;
    }
  }
  let decoded = decodeArray.join('');
  return decoded;
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let listaOrdenada = tech.sort()
  let listaDeObjetos = []
  for (let i=0; i<tech.length; i+=1) {
  //   listaDeObjetos.push {
  //     tech: tech [i],
  //     name: name,
  // }
  return listaDeObjetos
}
let tech = ['CSS', 'Javascript', 'HTML']
let name = 'Tiago'

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  if (numbers.length != 11) {
    return "Array com tamanho incorreto." }
  for (let i of numbers) {
    if (i < 0 || i > 10) {
      return "não é possível gerar um número de telefone com esses valores"
    }
  }

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
