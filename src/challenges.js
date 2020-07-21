// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && a === b) {
    return true;
  }
    return false;
}


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
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
  // retorna array[array.length - 1] + ', ' array[0]
  let primeiraParalvra = array[array.length - 1];
  let stringConcat = primeiraParalvra + ', ' + array[0];
  return stringConcat;
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  // vitorias = wins * 3
  // empates = ties
  // retorna a soma disso
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
    if (maiorNumero === array[index]) {
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
  }
    return 'os gatos trombam e o rato foge';
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
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');

  return string;
}
function decode(string2) {
  // seu código aqui
  string2 = string2.replace(/1/g, 'a');
  string2 = string2.replace(/2/g, 'e');
  string2 = string2.replace(/3/g, 'i');
  string2 = string2.replace(/4/g, 'o');
  string2 = string2.replace(/5/g, 'u');

  return string2;
}


// Desafio 10
function techList(tech, name) {
  // seu código aqui
  // Array vazio
  // Para cada item da lista adicionar no novo array com 'tech:' e 'nome:'
  let resultado = [];
  if (tech.length === 0) {
    return 'Vazio!'
  }
  tech.sort();
  for (i in tech) {
    resultado.push({'tech': tech[i], 'name': name});
  }
  return resultado;
  }


// Desafio 11
function generatePhoneNumber(phoneNumber) {
  // seu código aqui
  // Se algum dos numeros for >9 e <0 e repetiver 3+ "não é possível gerar um número de telefone com esses valores"
  // Se tamanho do array !== 11 "Array com tamanho incorreto."
  // Se for td ok, retorna numeroTelefoneCompleto.
  // Verificando se o tamanho é 11
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
    //Verificando se repete
    let arrayVerificar = phoneNumber;
    let contador = 0;
    let repetiu = false;
    for (let i = 0; i < phoneNumber.length; i += 1) {
      for (let j = 0; j < arrayVerificar.length; j += 1) {
        if (arrayVerificar[j] === phoneNumber[i]) {
          contador += 1
        }
        if (contador >= 3) {
          repetiu = true;
        }
      }
    }
    contador = 0;
  
  //Verificando numeros e condicao de repeticao
  for (let k = 0; k < phoneNumber.length; k += 1) {
    if (phoneNumber[k] < 0 || phoneNumber[k] > 9 || repetiu === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    }
  //Caso não retorne nenhuma das outras
  let numeroTelefoneCompleto = '(' + arrayNumber[0] + arrayNumber[1] + ') ' + arrayNumber[2] + arrayNumber[3] + arrayNumber[4] + arrayNumber[5] + arrayNumber[6] + '-' + arrayNumber[7] + arrayNumber[8] + arrayNumber[9] + arrayNumber[10];

  return numeroTelefoneCompleto;
  }

  
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  // Para que formarTriangulo = true ->
  // A + B > C e A - B < C
  // A + C > B e A - C
  // B + C > A
  let formarTriangulo = false;
  let somaAB = lineA + lineB;
  let somaAC = lineA + lineC;
  let somaBC = lineB + lineC;
  let diferencaAB = Math.abs(lineA - lineB);
  let diferencaAC = Math.abs(lineA - lineC);
  let diferencaBC = Math.abs(lineB - lineC);
  if (somaAB < lineC || somaAC < lineB || somaBC < lineA) {
    formarTriangulo = false;
  } else if (diferencaAB > lineC || diferencaAC > lineB || diferencaBC > lineC) {
    formarTriangulo = false;
  } else {
    formarTriangulo = true;
  }
  return formarTriangulo;
}


// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let quantidadeBebidas = drinks.match(/\d+/g);
  let quantidadeCoposDeAgua = 0;
  for (bebida in quantidadeBebidas) {
    quantidadeCoposDeAgua += Number(quantidadeBebidas[bebida]);
  }
  if (quantidadeCoposDeAgua === 1) {
    return quantidadeCoposDeAgua + ' copo de água';
  } else {
    return quantidadeCoposDeAgua + ' copos de água';
  }
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
