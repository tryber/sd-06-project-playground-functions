// Desafio 9
function encode(str) {
    for (i in str) {   
    str2 = str.replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5)
    }
    return str2
}

function decode(num) {
    for (i in num) {   
        num2 = num.replace(/1/g, 'a')
        .replace(/2/g, 'e')
        .replace(/3/g, 'i')
        .replace(/4/g, 'o')
        .replace(/5/g, 'u')
        }
        return num2 
  }

