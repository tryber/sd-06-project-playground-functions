let phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
let genPhoneNumber = "";

for (let index = 0; index < phoneNumber.length; index += 1) {
  console.log("Estamos no index = " + index);
  if (index === 0) {
    genPhoneNumber += "(";
  }
  else if (index === 2) {
    genPhoneNumber += ") ";
  }
  else if (index === 7) {
    genPhoneNumber += "-";
  }
  let number = phoneNumber[index];
  genPhoneNumber += number.toString();
}

console.log(genPhoneNumber);