let lineA = 1;
let lineB = 14;
let lineC = 8;

checkOutput = false;

checkOneSide(lineA, lineB, lineC);
checkOneSide(lineB, lineA, lineC);
checkOneSide(lineC, lineA, lineB);



function checkOneSide(sideToCheck, otherSide1, otherSide2){
    if (sideToCheck < otherSide1 + otherSide2 && sideToCheck > Math.abs(otherSide1 - otherSide2) && sideToCheck > Math.abs(otherSide2 - otherSide1)){
        checkOutput = true;
    } else{
        checkOutput = false;
    }
}


console.log(checkOutput);