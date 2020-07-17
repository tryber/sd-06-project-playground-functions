// Desafio 1
function compareTrue(boolOne, boolTwo) {
  if (boolOne === true && boolTwo === true) {
    return true;
  }
  return false;
}
//  console.log(compareTrue(false,true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(palavras) {
  let novoArray = palavras.split(' ');
  return novoArray;
}
//  console.log(splitSentence("teste trybe escola"));

// Desafio 4
function concatName(arrayPalavras) {
  let palavras = '';
  palavras += arrayPalavras[arrayPalavras.length - 1];
  palavras += ', '
  palavras += arrayPalavras[0];
  return palavras;
  // seu código aqui
}
//  console.log(concatName(['teste','trybe','escola']));

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
  // seu código aqui
}

// Desafio 6
function highestCount(arrayNumeros) {
  let menorNumero = 0;
  let contador = 0;
  for (let x in arrayNumeros) {
    if (arrayNumeros[x] > menorNumero) {
      menorNumero = arrayNumeros[x];
    }
  }
  // segundo: comparar o maior
  for (let x in arrayNumeros) {
    if (arrayNumeros[x] === menorNumero) {
      contador += 1;
    }
  }
  return contador;
}


// Desafio 7
function catAndMouse(mouse ,cat1 ,cat2) {
  if (Math.abs(cat1-mouse)===Math.abs(mouse-cat2)){
    return "os gatos trombam e o rato foge"
  } else if (mouse - cat1 > mouse - cat2) {
    return "cat1";
  } else
  return "cat2";
} 

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let resposta = [];
  let contador = 0;
  for (let x in arrayNumeros){
    if (arrayNumeros[x] % 3 === 0 && arrayNumeros[x] % 5 === 0) {
      resposta[contador] = 'fizzBuzz';
      contador += 1;
    } else if (arrayNumeros[x] % 3 === 0) {
      resposta[contador] = 'fizz';
      contador += 1;
    } else if (arrayNumeros[x] % 5 === 0) {
      resposta[contador] = 'buzz';
      contador += 1;
    } else {
      resposta[contador] = 'bug!';
      contador += 1;
    }
  }
  return resposta;
}

//  console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(stringLetras) {
  let resultado = stringLetras.replace(/a/gi, 1);
  resultado = resultado.replace(/e/gi, 2);
  resultado = resultado.replace(/i/gi, 3);
  resultado = resultado.replace(/o/gi, 4);
  resultado = resultado.replace(/u/gi, 5);
  return resultado;
}

function decode(stringNumeros) {
  let resultado = stringNumeros.replace(/1/gi, 'a');
  resultado = resultado.replace(/2/gi, 'e');
  resultado = resultado.replace(/3/gi, 'i');
  resultado = resultado.replace(/4/gi, 'o');
  resultado = resultado.replace(/5/gi, 'u');
  return resultado;
}

// Desafio 10
function techList(nomesDeTecnologias , name) {
  if (nomesDeTecnologias.length === 0) {
    return 'Vazio!'
  }
  let nomesOrdenados =  nomesDeTecnologias.sort();
  let listaObjetos = [];
  for (let x in nomesOrdenados){
    let objeto = {
    tech : nomesOrdenados[x],
    name : name
    };
    listaObjetos[x] = objeto;
  }
  return listaObjetos;
}
 // let a = ["abc" , "def" , "ghi"];
 // let b = "Lucas";
 // console.log(techList(a,b));

// Desafio 11
function generatePhoneNumber(numeroTelefone) {
  //  verificar o tamanho do array
  
  if (numeroTelefone.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  //  verificar se o número repetiu mais que três vezes
    let contador = 0;
    let repetiu = false;
    let listaAuxiliar = numeroTelefone;
    for (let i = 0; i < numeroTelefone.length ; i += 1) {
      for (let j = 0; j < numeroTelefone.length ; j += 1){
        if (listaAuxiliar[i] === numeroTelefone[j]){
            contador += 1
            if (contador === 3) {
              repetiu = true;
            }
        }
      }
    contador=0;
  }
  // estabelecendo as condições de return
  for (let x in numeroTelefone){
    if (numeroTelefone[x] < 0 || numeroTelefone[x] > 9 || repetiu === true ) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // Lógica de programação
  //  generatePhoneNumber deverá retornar (12) 34567-8901.
  // months.splice(1, 0, 'Feb'); inserts at index 1
  numeroTelefone.splice(0,0,'(')
  numeroTelefone.splice(3,0,')')
  numeroTelefone.splice(4,0,' ')
  numeroTelefone.splice(10,0,'-')
  
  let numeroFormatado = '';
  for (let x in numeroTelefone){
    numeroFormatado += numeroTelefone[x]
  }
  return numeroFormatado;
  
}
 generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);
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
