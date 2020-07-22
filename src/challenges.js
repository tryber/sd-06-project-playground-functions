// tools used //
function divisivel(numero,indice){
  if(numero % indice === 0){
    return true
  }
  else{
    return false
  }
}

function distancia(posA,posB){
  return Math.abs(posA-posB)
}


// Desafio 1
function compareTrue(first,second) {
  return first && second ? true : false;
  // seu código aqui
}

// Desafio 2
function calcArea(base,height) {
  return (height*base)/2;
  // seu código aqui
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
}
// Desafio 4
function concatName(listaStrings){
  let minhaLista = [].concat(listaStrings);
  let ultimo = minhaLista[minhaLista.length-1];
  let primeiro = minhaLista[0];
  return `${ultimo}, ${primeiro}`;
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontos = wins*3 + ties;
  return pontos
  // seu código aqui
}

// Desafio 6
function highestCount(numbers) {
  //percorrer o código e encontrar o maior numero
  // percorrer o código e contar quantas vezes ele aparece
  let maior = -Infinity;
  let contaMaior = 0
  for(let i in numbers){
    if(numbers[i] > maior){
      maior = numbers[i];
    }
  }
  for(let x in numbers){
    if(numbers[x] === maior){
      contaMaior +=1;
    }
  }
  return contaMaior;
}


// Desafio 7
function catAndMouse(posMouse,posCat1,posCat2) {
  let mouseCat1 = distancia(posMouse,posCat1);
  let mouseCat2 = distancia(posMouse,posCat2);
  if(mouseCat1 > mouseCat2){
    return 'cat2'
  }
  else if(mouseCat1 < mouseCat2){
    return 'cat1'
  }
  else{
    return 'os gatos trombam e o rato foge'
  }
}



// Desafio 8
 function fizzBuzz(numeros) {
  let meusNumeros = [].concat(numeros);
  let resposta = [];
  let element;
  for(i in meusNumeros){
    let n = meusNumeros[i];
    switch (true){
      case (divisivel(n,3) && !divisivel(n,5)):
        element ='fizz';
      break;

      case (!divisivel(n,3) && divisivel(n,5)):
        element = 'buzz';
      break;

    case (divisivel(n,3) && divisivel(n,5)):
      element = 'fizzBuzz';
      break;
    case (!divisivel(n,3) && !divisivel(n,5)):
      element = 'bug!';
      break;
    }
    resposta.push(element);
  }
  return resposta
}




// Desafio 9
function encode(string) {
  let letras = string.split('');
  let vogais = ['a','e','i','o','u'];
  let myMap = new Map();
  //setando mapa
  for(let i=0;i<vogais.length;i+=1){
    myMap.set(vogais[i], i+1);
  }
  for(let i in letras){
    const letra = letras[i];
    if(myMap.has(letra)){
      letras[i] = myMap.get(letra)
    }    /* */
  }
  return letras.join('');
}

/*a -> 1 \
e -> 2 \
i -> 3 \
o -> 4 \
u -> 5 */
   //varrer o array
function decode(stringEncoded) {
  let myMap = new Map();
  let vogais = ['a','e','i','o','u'];
  let letras = stringEncoded.split('');

  for(i in vogais){
    myMap.set((parseInt(i)+1).toString(), vogais[i]);
  }
  for(i in letras){
    let num = letras[i];
    if(myMap.has(num)){
      letras[i] = myMap.get(num);
    }
  }
  return letras.join('');
}



// Desafio 10
function techList(tecnologias,name) {
  //função sorte oganiza o array tecnologia
  //para cada elemento em tecnologias essa função define um objeto baseado em um valor de string do array.
  // seta o atributo tech baseado no valor da string,
  // alem disso define outro atributo com o nome 'nome'
  // atribui ao atributo nome de cada tecnologia o valor da string passado como input para função principal.
  let techs = tecnologias.sort().map(function(tecnologia) {return{tech: tecnologia,nome:name}})
  // seu código aqui
    return console.log(techs);
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



