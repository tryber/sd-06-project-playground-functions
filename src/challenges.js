// Desafio 1
function compareTrue(a, b) {
  return a && b
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + (1 * ties)
}

// Desafio 6
function highestCount(arr) {
  arr.sort((a, b) => a - b);
  return (arr.filter(a => a === arr[arr.length - 1])).length
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let diff1 = Math.abs(mouse - cat1);
  let diff2 = Math.abs(mouse - cat2);
  if (diff1 === diff2) {
    return 'os gatos trombam e o rato foge'
  } else {
    return (diff1 > diff2) ? 'cat2' : 'cat1'
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      answer.push('fizzBuzz');
    } else if (arr[i] % 3 === 0) {
      answer.push('fizz');
    } else if (arr[i] % 5 === 0) {
      answer.push('buzz');
    } else {
      answer.push('bug!')
    }
  }
  return answer
}

// Desafio 9
function encode(str) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  let arr = str.split('');
  for (let i in arr) {
    if (arr[i] in code) {
      arr[i] = code[arr[i]];
    }
  }
  return arr.join('')
}

// extra 9.1

// function encode2(str) {
//   let st = str.replace(/a/g, 1);
//   st = st.replace(/e/g, 2);
//   st = st.replace(/i/g, 3);
//   st = st.replace(/o/g, 4);
//   return st.replace(/u/g, 5)
// }

// fiz dessa forma pq poderia muito bem fazer como acima, mas é legal usar outras formas

function decode(str) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  let inverse = Object.entries(code);
  let arr = str.split('');
  for (let i in arr) {
    if (Object.values(code).includes(+arr[i])) {
      arr[i] = inverse[Object.values(code).indexOf(+arr[i])][0];
    }
  }
  return arr.join('')
}

// extra 9.2
// function decode2(str) {
//   let st = str.replace(/1/g, 'a');
//   st = st.replace(/2/g, 'e');
//   st = st.replace(/3/g, 'i');
//   st = st.replace(/4/g, 'o');
//   return st.replace(/5/g, 'u')
// }


// Desafio 10
function techList(arr, name) {
  if (!arr[0]) {
    return 'Vazio!'
  } else {
    let answer = [];
    arr.sort()
    for (let i = 0; i < arr.length; i += 1) {
      answer.push({
        tech: arr[i],
        name,
      })
    }
    return answer
  }
}

// Desafio 11
function generatePhoneNumber(arr) {
  let erroTamanho = 'Array com tamanho incorreto.'
  let erroNums = 'não é possível gerar um número de telefone com esses valores';
  let tel = '('
  if (arr.length !== 11) {
    return erroTamanho
  }


  let counter = {};
  for (let i = 0; i < 11; i += 1) {
    if (arr[i] < 0 || arr[i] > 9) {
      return erroNums
    }

    // atencao! O keys retorna um array com as keys em string,
    // enquanto o includes checa === com os numeros!
    // Para isso precisamos checar como string

    (Object.keys(counter).includes(`${arr[i]}`)) ? counter[arr[i]] += 1 : counter[arr[i]] = 1;

    if (counter[arr[i]] >= 3) {
      return erroNums
    }

    if (i === 1) {
      tel += `${arr[i]}) `
    } else if (i === 6) {
      tel += `${arr[i]}-`
    } else {
      tel += String(arr[i])
    }
  }
  return tel
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA < lineB + lineC && lineB < lineC + lineA && lineC < lineB + lineA)
}

// Desafio 13
function hydrate(str) {
  let numbers = str.replace(/[^1-9]/g, '');
  let sum = 0
  for (let i of numbers) {
    sum += +i
  }
  return (sum > 1) ? (`${sum} copos de água`) : (`${sum} copo de água`)
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
