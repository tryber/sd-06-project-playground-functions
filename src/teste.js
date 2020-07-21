// Desafio 13
function hydrate(string){
  let num = string.match(/\d+/g)
  soma = 0
  for(i in num){
    soma = soma + Number(num[i])
  }
  return soma + " copo de água"
}

console.log(hydrate('20 cachaça, 5 cervejas e 1 copo de vinho'))