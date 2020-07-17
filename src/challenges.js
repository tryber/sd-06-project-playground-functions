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
  // Dependendo do resuktado adicionar no novo array
  // Retornar o novo array
  let arrayFizzBuzz = [];
  for (index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (array[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
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
  let vezesRepetidas = repeticaoNumero(array);
  let numeroTelefone = '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array [4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9 || vezesRepetidas >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return numeroTelefone;
}

// Repeticao +3x
// Dado o array, para cada numero do array verificar se ele se repete
// Caso ele repita repeticao +1;
function repeticaoNumero(array) {
  let numeroRepetido = array[0];
  let contador = 0;
  for (let i in array) {
    for (let j in array) {
      if (numeroRepetido === array[j]) {
        contador += 1;
      }
    }
    if (contador > 3) {
      break;
    } else {
      numeroRepetido = array[i];
      contador = 0;
    }
  }
  return contador;
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