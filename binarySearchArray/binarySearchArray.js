/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function(array, target) {
    let min = 0;
    let max = array.length-1;
    let half;
    while ( min <= max){
        half = (min + max ) /2;
        if ( array[half] === target){
            return array[i];
        }else{
            if(array[half] < target){
                min = half + 1;
            }else{
                max = half-1
            }
        }
    }
    return array[i];
};


/*
var binarySearch = function(array, target) {
    for ( var i = 0; i < array.length; i++ ){
        if(target === array[i]){
             return array[i];
        }
    }
};

*/