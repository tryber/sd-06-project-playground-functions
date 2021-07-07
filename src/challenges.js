// Desafio 1
function compareTrue(f01par01 = true, f01par02 = true) {
  if ((f01par01 == true) && (f01par02 == true))
    {
      return true;
    }
  else
    {
      return false;
    }
}


// Desafio 2
function calcArea(base = 0, height = 0) 
{
    return (base * height) / 2;
}

// Desafio 3
function splitSentence(astring) {
  let aarray = astring.split(' ');
  return aarray;
}

// Desafio 4
function concatName(f04par01 = []) 
{
    str = f04par01[f04par01.length-1] +", "+ f04par01[0];
    return str;
}

// Desafio 5
function footballPoints(wins, ties) 
{
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(f06par01 = []) {
  f06maior = f06par01[0];
  for (let f06cont01 = 1; f06cont01 <= f06par01.length; f06cont01 += 1)
      {
        if (f06maior<f06par01[f06cont01])
        {
            f06maior = f06par01[f06cont01]
        }
      }
  
  f06repeticoes = 0
  for (let f06cont02 = 0; f06cont02 <= f06par01.length; f06cont02 += 1)
  {
      if (f06maior == f06par01[f06cont02])
      {
          f06repeticoes = f06repeticoes + 1
      }
  }
  
  return f06repeticoes
}

// Desafio 7
function catAndMouse(mouse = 0, cat1 = 0, cat2 = 0) 
{
    f07dist01 = Math.abs(mouse - cat1);
    f07dist02 = Math.abs(mouse - cat2);
    f07rapido = "cat1";
    if (f07dist02 < f07dist01)
        {
          f07rapido = "cat2";
        }
    if (f07dist02 == f07dist01)
        {
          f07rapido = "os gatos trombam e o rato foge";
        }

return f07rapido;
}

// Desafio 8
function fizzBuzzfunction fizzBuzz(f08numeros = []) 
{
    f08nomes = [];
    f08cont=0;
    if ((f08numeros[f08cont] % 3 === 0) && (f08numeros[f08cont] % 5 === 0)) 
                {
                    f08nomes = f08nomes + '"fizzBuzz"';
                } 
            if ((f08numeros[f08cont] % 3 === 0) && (f08numeros[f08cont] % 5 !== 0)) 
                {
                    f08nomes = f08nomes + '"fizz"';
                }
            if ((f08numeros[f08cont] % 5 === 0) &&  (f08numeros[f08cont] % 3 !== 0)) 
                {
                    f08nomes = f08nomes + '"buzz"';
                } 
            if ((f08numeros[f08cont] % 3 !== 0) && (f08numeros[f08cont] % 5 !== 0)) 
                {
                    f08nomes = f08nomes + '"bug!"';
                }

    for (let f08cont = 1; f08cont < f08numeros.length; f08cont += 1)
        {
            if ((f08numeros[f08cont] % 3 === 0) && (f08numeros[f08cont] % 5 === 0)) 
                {
                    f08nomes = f08nomes + ', "fizzBuzz"';
                } 
            if ((f08numeros[f08cont] % 3 === 0) && (f08numeros[f08cont] % 5 !== 0)) 
                {
                    f08nomes = f08nomes + ', "fizz"';
                }
            if ((f08numeros[f08cont] % 5 === 0) &&  (f08numeros[f08cont] % 3 !== 0)) 
                {
                    f08nomes = f08nomes + ', "buzz"';
                } 
            if ((f08numeros[f08cont] % 3 !== 0) && (f08numeros[f08cont] % 5 !== 0)) 
                {
                    f08nomes = f08nomes + ', "bug!"';
                }
        }
        return f08nomes;
}

// Desafio 9
function encode(encString = "") 
{
  encStringNew = "";
  for (let encCont = 0; encCont < encString.length; encCont += 1)
  {
    switch (encString[encCont])
    {
      case "a":
          encStringNew += "1";
      break;
      case ("e"):
          encStringNew += "2";
      break;
      case "i":
          encStringNew += "3";
      break;
      case "o":
          encStringNew += "4";
      break;
      case "u":
          encStringNew += "5";
      break;
      
      default:
        encStringNew += encString[encCont];
    }
  }
  return encStringNew
}
function decode(decString = "") 
{
  decStringNew = "";
  for (let decCont = 0; decCont < decString.length; decCont += 1)
  {
      switch (decString[decCont])
      {
        case "1":
          decStringNew += "a";
        break;
        case ("2"):
          decStringNew += "e";
        break;
        case "3":
          decStringNew += "i";
        break;
        case "4":
          decStringNew += "o";
        break;
        case "5":
          decStringNew += "u";
        break;
        
        default:
          decStringNew += decString[decCont];
      }
  }
  return decStringNew
}

// Desafio 10
function techList(f10array = [], name = "") 
{
    let f10arrayresult=[];
    let f10arrayNew = f10array.sort()
    for (let  c= 0; c < f10array.length; c += 1)
    {
    let obj = 
        {
        tech: f10arrayNew[c],
        nome: name
        }
    f10arrayresult[c]=obj;
    }

return f10arrayresult;
}

// Desafio 11
function generatePhoneNumber(numbers=[])
{
    n11=1;
    nv=1;
    if (numbers.length!=11)
        {
        n11=0;
        result="Array com tamanho incorreto.";
        }
    else
        {
        for (let  c= 0; c < 11; c += 1)
            {
            if ((numbers[c]<0)||(numbers[c]>9))
                {
                nv=0;
                }
            }
        if (nv==0)
            {
            result="não é possível gerar um número de telefone com esses valores.";
            }
        }
    if ((n11==1)&&(nv==1))
        {
            str="teste";
        //str="(" + numbers[0] + numbers[1] + ")"+" "+numbers[2]+numbers[3]+numbers[4]+numbers[5]+numbers[6]+"-"numbers[7]+numbers[8]+numbers[9]+numbers[10];
        result=str;
        }
return result;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
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
