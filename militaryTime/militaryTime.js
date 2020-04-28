// Write a function that takes in a string of the time and returns the time in military format.
//Ex: militaryTime('7:47pm') returns '19:47'

function militaryTime(timeStr) {
  let timeArr = timeStr.split('');
  let timeNum;
  for(var i = 0; i < timeArr.length-3; i++){
    if(isNaN(timeArr[i])){
      timeArr.splice(timeArr[i]-1, 1);
    }
  }
    if(timeArr.length-2 === "p"){
      timeArr.pop();
      timeArr.pop();
      timeArr.join(' ').trim();
      let timeNum = parseInt(timeArr);
      timeNum += 1200;
    }else if(timeArr.length-2 === "a"){
      timeArr.pop();
      timeArr.pop();
      timeArr.join(' ').trim();
      let timeNum = parseInt(timeArr);
    }
    if(timeNum > 2400){
      return timeNum - 2400;
    }else{
      return timeNum;
    }
}

// separate the string into an array of strings of single characters
// loop through to array.length-3
// if the string is nan delete/remove it   //gets rid of the :
// if the array .length-2 === p
// pop off the last 2 in the array  //gets rid of the pm/am
// combine array of strings to 1 string with .join and .trim the space out
// make a number .parseInt, add 1200  ex turns 2:00pm to 1400
// if over 24 subtract 24
// return as a string
//
//