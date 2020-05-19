/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
    var DIGIT_VALUES = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
*/
var translateRomanNumeral = function(romanNumeral) {
  if( typeof(romanNumeral) !== string){
    return null;
  }
  if(romanNumeral.length < 1){
    return null;
  }
  let I = 1;
  let V = 5;
  let X = 10;
  let L = 50;
  let C = 100;
  let D = 500;
  let M = 1000;
  let total = 0;
  let numArr = [];
  for(let i = 0; i < romanNumeral.length; i++){
    if (roma)
  }

  for(let i = 0; i < romanNumeral.length; i++){
    let newNum = parseInt(romanNumeral[i])
    if(newNum )
    numArr.push()
  }
    let i = 0;
    while(i < numArr.length){
    if(numArr[i] < numArr[i+1]){
      total += numArr[i+1] - numArr[i];
      i+2;
    }
    else if(numArr[i+1] > numArr[i]){
      total += numArr[i];
      i+1;
    }
  }
  return total;

};

//edge case for not a string returns role 
//give values to each letter
//iterate over the string
//if the x index is less than the x + 1 index then subtract it from the x+1 index
//else add them all