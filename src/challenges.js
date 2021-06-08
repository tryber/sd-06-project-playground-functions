// Desafio 1
function compareTrue(logico1, logico2) {
  let resposta = false;
  if (logico1 && logico2) {
    resposta = true;
  }
  return resposta;
}

// Desafio 2
function calcArea(base, heigth) {
  return ((base * heigth) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado;
}

// Desafio 4
function concatName(meuArray) {
  let primeiraPalavra = meuArray[0];
  let ultimaPalavra = meuArray[meuArray.length - 1];
  let resposta = '';
  resposta += (ultimaPalavra + ', ' + primeiraPalavra);
  return resposta;
}

// Desafio 5
function footballPoints(wins, lies) {
  let vitorias = wins * 3;
  let empates = lies * 1
  return vitorias + empates;
}

// Desafio 6
function highestCount(meuArray) {
  let maior = Math.max.apply(null, meuArray);
  let contMaior = 0;
  for (let i = 0; i < meuArray.length; i += 1) {
    if (meuArray[i] === maior) {
      contMaior += 1
    }
  }
  return contMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = 0;
  let distanciaGato2 = 0;
  let resposta = '';
  // acertando os operadores
  if (mouse > cat1) {
    distanciaGato1 = mouse - cat1;
  } else {
    distanciaGato1 = cat1 - mouse
  }
  if (mouse > cat2) {
    distanciaGato2 = mouse - cat2;
  } else {
    distanciaGato2 = cat2 - mouse;
  }
  // verificando quem ta mais perto
  if (distanciaGato1 < distanciaGato2) {
    resposta = 'cat1';
  } else if (distanciaGato2 < distanciaGato1) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }
  return resposta;
}

// Desafio 8
function fizzBuzz(meuArray) {
  let resposta = [];
  for (let i in meuArray) {
    if ((meuArray[i] % 3 === 0) && (meuArray[i] % 5 !== 0)) {
      resposta.push('fizz');
    } else if ((meuArray[i] % 3 !== 0) && (meuArray[i] % 5 === 0)) {
      resposta.push('buzz');
    } else if ((meuArray[i] % 3 === 0) && (meuArray[i] % 5 === 0)) {
      resposta.push('fizzBuzz');
    } else {
      resposta.push('bug!');
    }
  }
  return resposta;
}

// Desafio 9
function encode(minhaString) {
  let codificar = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5' }
  return minhaString.replace(/[aeiou]/g, m => codificar[m])
}
function decode(minhaString) {
  let decodificar = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' }
  return minhaString.replace(/[12345]/g, m => decodificar[m]);
}

// Desafio 10
function techList(lista, nome) {
  let resposta = [];
  if (lista.length > 0) {
    lista.sort();
    for (let i in lista) {
      resposta.push({ 'tech': lista[i], 'name': nome });
    }
  } else {
    resposta = 'Vazio!';
  }
  return resposta;
}

// Desafio 11
// criando uma função para verificar se existem números duplicados
function verificaNumeroRepetido(numero, arrayUtilizado) {
  let verificarNumero = 0;
  for (let contador in arrayUtilizado) {
    if (arrayUtilizado[contador] === numero) {
      verificarNumero += 1;
    }
  }
  return verificarNumero;
}
// Vou pegar a função acima (verifica numero repetido) e passar ela numero por numero 
function validaMenorQueTres(arrayUtilizado) {
  let resposta = 0;
  for (let contador = 0; contador < arrayUtilizado.length; contador += 1) {
    resposta = verificaNumeroRepetido(arrayUtilizado[contador], arrayUtilizado);
    if (resposta > 2) {
      return resposta;
    }
  }
  return resposta;
}
// juntando tudo
function generatePhoneNumber(meusNumeros) {
  // verificar se o numero é diferente de 11
  if (meusNumeros.length !== 11) {
    return "Array com tamanho incorreto."
  }
  for (let numero = 0; numero < meusNumeros.length; numero += 1) { //Passando numero por numero
    let verRepetidos = validaMenorQueTres(meusNumeros);
    if (meusNumeros[numero] < 0 || meusNumeros[numero] > 9 || verRepetidos > 2) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  return "(" + meusNumeros[0] + meusNumeros[1] + ") " + meusNumeros[2] + meusNumeros[3] + meusNumeros[4] + meusNumeros[5] + meusNumeros[6] + "-" + meusNumeros[7] + meusNumeros[8] + meusNumeros[9] + meusNumeros[10];
}

// Desafio 12
function triangleCheck(linha1, linha2, linha3) {
  // seu código aqui
  if (linha1 < linha2 + linha3 && linha1 > Math.abs(linha2 - linha3)) {
    return true;
  } else if (linha2 < linha1 + linha3 && linha2 > Math.abs(linha1 - linha3)) {
    return true;
  } else if (linha3 < linha1 + linha2 && linha3 > Math.abs(linha1 - linha2)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(minhaString) {
  let soma = 0;
  let resposta = '';
  let numeros = minhaString.replace(/\D/g, '');
  for (let i = 0; i < numeros.length; i += 1) {
    soma += parseInt(numeros[i], 10);
  }
  if (soma > 1) {
    resposta = soma + ' copos de água';
  } else {
    resposta = soma + ' copo de água';
  }
  return resposta;
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
