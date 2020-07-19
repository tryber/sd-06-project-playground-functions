// Desafio 10
function techList(tech, name){
    let techSort = tech.sort();
    let lista = [];
    for(i in techSort){
        lista.push(techSort[i] = {tech: techSort[i]}, {nome: name})
    }
    return lista
  }
  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"))
