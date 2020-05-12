// * Given string containing combination of letters from a-z,
// * each character has the value of its position in the alphabet
// * i.e. a=1, z=26 etc.
// return the sum of the values of each letter in string

const boggleSolve = str => {
    let counter = 0;
    for(var i = 0; i < str.length; i++){
        counter += i;
    }
    return counter;
};


//create a counter variable
//iterate over the string
//counter += string[i]
//return counter