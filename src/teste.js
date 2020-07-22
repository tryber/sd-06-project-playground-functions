// Desafio 11
function generatePhoneNumber(array){
    var phoneNumber = '('
    if (array.length != 11)
      return "Array com tamanho incorreto."
      for (let i = 0; i < array.length; i++) {
        phoneNumber += (`${array[i]}`);
      if (array[i] < 0 || array [i]> 9){
        return "não é possível gerar um número de telefone com esses valores"
      }
        if (i === 1){
          phoneNumber += ')';
        }
        if (i === 6){
          phoneNumber += '-';
        }
    }
    return phoneNumber
  }
console.log(generatePhoneNumber([4, 1, 1, 1, 1, 1, 7, 8, 9, 0, 1]))