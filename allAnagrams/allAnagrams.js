/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function(string) {
  let splArr = [];
  let conArr = [];
  let anArr = [];
  let count = 0;
  splArr = string.split("");
  for (let i = 0; i < splArr.length; i++){
    if(i === 0){
      count = 1
    }else if(i > 0){
      count = 0
    }
    for (let k = count; k < splArr.length; k++){
      conArr.push(splArr[i], splArr[k])
      conArr[0].concat(conArr.length-1)
      
    }
    anArr.push(conArr);
  }
  console.log(anArr)
  return anArr;
};

/*
create new array
create count
split string
push to new array
iterate over array
nested loop
push concat [i] with [k][k]
add counter
return array
*/

