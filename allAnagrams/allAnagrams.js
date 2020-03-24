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
  if(string.length === 1 ){
    return string;
  }else if (string.length < 1){
    return string;
  }
    function recurse (str, anagram){
      let unique = {};
      if(typeof str === "string"){
        unique[anagram] = 1
      }
      for(var i = 0; i < str.length; i++){
        recurse(anagram + str[i], str.slice(0,i) + str.slice(i + 1))
     }
    }

    return Object.keys(unique);
};

/*
I String
O Array of Strings with each randomised order of input string.
C dont use uniq()
E

example input- 
'anagram'

i need to iterate over the input

*/

