/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */

Array.prototype.isSubsetOf = function(arr) {
  let sub = false;
  if(arr.length === 0){
    sub = true;
  }

  for(let i = 0; i < this.length; i++){
    let subset = false;
    for(let k = 0; k < arr.length; k++){
      if(arr[k] === this[i]){
        subset = true;
      }
    }
    if(subset !== true || sub === true){
      return false;
    }
  }
  return true;
};

// a subset array is checking if parts every part of the input array are in the mainset array to include empty array

// I- subset array

// O- true/false

// C- 

// E- disregard duplicates


// if input array is empty sub = true
// iterate over mainset array
// iterate over subset array
// check if every element of subset array are in the mainset array
// if an element does not match, return false