/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  let arr1 = string1.split("");
  let arr2 = string2.split("");
  let arr3 = [];
  for(let i = 0; i < arr1.length; i ++){
    for(let k = 0; k < arr2.length; k++){
      if(arr2[k] === arr1[i] ){
        arr3.push(arr2[k])
      }
    }
  }
  return _.uniq(arr3);
};

console.log(commonCharacters('acexivou', 'aegihobu'))

/* 
split the strings into individual strings
push into arrays
nested for loops
check to see if arr2's index match arr1's
return arr3 with only unique characters
*/