// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if(a === true && b === true) {
    return true;
  } 
    return false;
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ')
}
// Desafio 4
function concatName(array) {
  // seu código aqui
  let last = array.length-1;
  return  array[last]+', '+array[0];
}
// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let vit = 3 * wins;
  let emp = ties;
  return vit + emp;
}
// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiorNum = 0;
  let time = 0;
  for (let i in array) {
    if (array[maiorNum] < array[i]) {
      maiorNum = i;
    }
  };
  for (let c in array) {
    if(array[c] === array[maiorNum]){
      time++;
    }
  }
  return time;
} 
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dCat1Mouse;
  let dCat2Mouse;
  if(mouse>cat1) {
     dCat1Mouse = (mouse - cat1);
  } else {
     dCat1Mouse = (cat1 - mouse);
  };
  if(mouse>cat2){
     dCat2Mouse = (mouse - cat2);
  } else {
     dCat2Mouse = (cat2 - mouse);
  };
  if(dCat1Mouse === dCat2Mouse ) {
    return "os gatos trombam e o rato foge"
  } else if (dCat1Mouse < dCat2Mouse) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}
// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let novo = [];
  for(let i = 0; i < array.length; i++){
      if(array[i]%3 === 0 && array[i]%5 === 0){
        novo.push("fizzBuzz");
      } else if(array[i]%5 === 0 && array[i]%3 !== 0) {
        novo.push("buzz");
      } else if(array[i]%3 === 0 && array[i]%5 !== 0) {
        novo.push("fizz");
      } else {
        novo.push("bug!");
      }
    }
    return novo;
  }
 
// Desafio 9
function encode(word) {
  // seu código aqui
  let vogal = [''];
  let array = [... word];
  for(let i in array) {
    if(array[i] === 'a'){
      vogal += 1;
    } else if(array[i] === 'e'){
      vogal += 2;
    } else if(array[i] === 'i'){
      vogal += 3;
    } else if(array[i] === 'o') {
      vogal += 4;
    } else if(array[i] === 'u') {
      vogal += 5;
    } else {
      vogal += array[i];
    }
  }
  return vogal;
}

function decode(numero) {
  // seu código aqui
  let word = [''];
@@ -142,11 +142,24 @@ function decode(numero) {
  }
  return word;
};

// Desafio 10
function techList(tech, name) {
function techList(list, name) {
  // seu código aqui
  if (list.length === 0) {
    return 'Vazio!';
  }
  let listObj = [];
  let addList = list.sort();
  for (i in addList) {
    listObj[i] = {
      'tech': addList[i],
      'name': name,
    }
  }
  return listObj;
}
/*// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 && parametro2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(parametroString) {
  let array = parametroString.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let last = array.length-1;
  return  array[last]+', '+array[0];
}
  /*let lastIndice = array.lenght - 1;
  return array[lastIndice] + ',' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins*3) + (ties);
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let identificaMaior = 0;
  let numeroRepetido = 0;
  for (let i in array) {
    if (array[i] > identificaMaior) {
      identificaMaior = array[i];
    }
  }
  for (let i in array) {
    if (array[i] === identificaMaior) {
      numeroRepetido += 1;
    }
  }
  return numeroRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui
    if(cat1 === cat2 && cat2 === mouse) {
      return "os gatos trombam e o rato foge"
    } else if (cat1 < cat2) {
      return 'cat1'
    } else {
      return 'cat2'
    }
  }
  let resposta;
  if (cat1 < cat2) {
    return cat1;
  } else if (cat2 < cat1) {
    return cat2;
  } else {
    return resposta = 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resDesafio = [];
  for (let i in array) {
    if (((array[i] % 3) == 0) && ((array[i] % 5) == 0)) {
      resDesafio.push = ('fizzBuzz');
    } else if ((array[i] % 5) == 0) {
      resDesafio.push = ('buzz');
    } else if ((array[i] % 3) == 0) {
      resDesafio.push = ('fizz');
    } else {
      resDesafio.push = ('bug');
    }
  }
  return resDesafio;
}

// Desafio 9
function encode(parametro4) {
  for (let i in parametro4) {
    if (parametro4[i] === 'a') {
      parametro4[i].push = 1;
    } else if (parametro4[i] === 'e') {
      parametro4[i].push = 2;
    } else if (parametro4[i] === 'i') {
      parametro4[i].push = 3;
    } else if (parametro4[i] === 'o') {
      parametro4[i].push = 4;
    } else if (parametro4[i] === 'u') {
      parametro4[i].push = 5;
    }
  }
  return parametro4;
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
}*/


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
