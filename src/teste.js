// Desafio 13
function hydrate(string){
    let num = string.match(/\d+/g)
    soma = 0
    for(i in num){
      soma = soma + Number(num[i])
    }
    if(soma <= 1){
        return soma + " copo de água"
    }else{
        return soma + " copos de água"
    }
  }
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'))