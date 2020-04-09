/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

var quickSort = function(array) {
    array.unshift([]);
    let start = array[1];
    let end = array[array.length-1];
    let pivot = (start + end) /2;
        if(typeof array[1] !== 'undefined' && array[start] <= array[pivot]){
            array[0].unshift(array[start]);
            quickSort(array);
        }else if(typeof array[1] !== 'undefined' && array[start] >= array[pivot]){
            array[0].push(array[start]);
            quickSort(array);
        }
        quickSort(array);
        return array[0];
    }


    // var index = partition(array, start, end);
    // quickSorted(array, start, index-1);
    // quickSorted(array, index+1, end);

/*
I- Array
O- sorted array

//add a new array as the 0 index
//if the start is smaller than the pivot
//add to the new array
//recurse


*/