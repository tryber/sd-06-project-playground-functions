// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && a === b) {
    return true;
  } else {
    return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height)/2;
  return area;
}


// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}


// Desafio 4
function concatName(array) {
  // seu código aqui
  // [a, b, c, d, e] -> 'e, a'
  //retorna array[array.length - 1] + ', ' array[0]
  let primeiraParalvra = array[array.length - 1];
  let stringConcat = primeiraParalvra + ', ' + array[0];

  return stringConcat;
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  // vitorias = wins * 3
  // empates = ties
  //retorna a soma disso
  let points = (3 * wins) + ties
  return points;
}


// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiorNumero = array[0];
  let repeticao = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero == array[index]) {
      repeticao += 1;
    }
  }
  return repeticao;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia1 < distancia2) {
    return 'cat1';
  } else if (distancia1 > distancia2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}


// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  // receber um array, passar por todos os numeros do array verificando se é divisivel
  // for (let i = 0; i < array.length; i += 1)
  // Dependendo do resuktado trocar o numero pro string
  // Retornar o novo array
//   let arrayFizzBuzz = [];
//   for (index in array) {
//     if (index % 3 === 0) {
//       arrayFizzBuzz += 'fizz';
//     } else if (index % 5 === 0) {
//       arrayFizzBuzz += 'buzz';
//     } else if (index % 3 === 0 && index % 5 === 0) {
//       arrayFizzBuzz += 'fizzBuzz';
//     } else {
//       arrayFizzBuzz += 'bug!';
//     }
//   }
//   return arrayFizzBuzz;
// }

// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// function divisor() {
//   if (x % 3 === 0) {
    
//   }
}

// Desafio 9
function encode(string) {
  // seu código aqui
  // Transformar num array
  // for cada i verificar se é vogal
  // Se for vogal trocar a vogal pelo numero
  // Transformar array em string
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(array, name) {
  // seu código aqui
  // Para cada item da lista deve retornar em um unico objeto um array com a tecnologia e o nome
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let numeroTelefone = '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array [4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
  if (array.length > 11) {
    return 'Array com tamanho incorreto';
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      return numeroTelefone;
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