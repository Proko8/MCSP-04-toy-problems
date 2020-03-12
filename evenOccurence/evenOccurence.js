/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */

var evenOccurrence = function(arr) {
  let nums = {};
  for(var i = 0; i < arr.length; i++){
    if(nums[arr[i]] === undefined){
      nums[arr[i]] = 1;
    }else{
      nums[arr[i]]++
    }

    for(var key in nums){
      if(nums[key] % 2 === 0){  
        return nums[key];   //not accessing key's value?
      }
    }
  }
};

//create object
//iterate through the array.
//if obj.arr[i] is undefined, add to obj as property with value of 1
//if not undefined increment that property's value by 1.
//iterate through obj.
//if obj prop %2 === 0 return it