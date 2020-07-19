// Desafio 8
function fizzBuzz(array) {
    let list = []
    for (let i in array) {
        if (array[i] % 5 === 0 && array[i] % 3 === 0){
           list.push ("fizzBuzz");
        }
        else if (array[i] % 5 === 0) {
            list.push ("buzz");
        }
        else if (array[i] % 3 === 0){
            list.push ("fizz");
        }else{
            list.push ("bug!");
        }
        }
    return list
    }
  