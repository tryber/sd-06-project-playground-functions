// Desafio 10
function techList(tech, name){
    let techSort = tech.sort();
    let lista = [];
    for(i in techSort){
        lista.push({tech: techSort[i], name: name})
        }
    if(lista.length === 0){
        return 'Vazio!';
    }else{
        return lista
    }
  }
  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))
