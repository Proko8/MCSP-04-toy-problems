// Write a function that takes in an array of numbers and returns the maximum number of consecutive 1s

//maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,5,6,3]) returns 4

function maxConsecutiveOnes(array) {
  counterObj = {
    count :0,
    count2 :0,
  };
  var counter = 0;
  if(array[0] === 1){
    counterObj[count] = 1
  }
  for(var i = 1; i < array.length; i++){
    if(array[i] === 1 && array[i+1] === 1 && array[i-1] === 1){
      if(counterObj[count] > counterObj[count2]){
        counterObj[count] += 1
      }else{
        counterObj[count2] += 1
      }
    }
    if(array[i] === 1 && array[i+1] === 1 && array[i-1] !== 1){

    }
  }
}

//create counterObject {count:}
//if array[0] equals 1 counterObject["count"] = 1
//iterate over the input array array[i = 1]
//if array[i] equals 1 AND array[i]+1 equals 1 AND array[i]-1 equals 1
//count + 1
//else if array[i] equals 1 AND array[i] +1 equals 1 AND array[i]-1 Does not equal 1
//count =1
//iterate again