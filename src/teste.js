// Desafio 12
function triangleCheck(a,b,c) {
  let absA = Math.abs(a);
  let absB = Math.abs(b);
  let absC = Math.abs(c);
  if((a==0 || b==0 || c==0) || (a+b<c || a+c<b || b+c<a)){
    return false

  }else{
    return true
  }
}
console.log(triangleCheck(16,20,30))
