// Desafio 13
function hydrate(string){
    let num = string.match(/\d+/g)
    soma = 0
    for(i in num){
      soma = soma + Number(num[i])
    }
    return soma + " copo de água"
  }
console.log(hydrate('4 caipirinhas e 2 cervejas'))