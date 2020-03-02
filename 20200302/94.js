// Exercise 94 - I didn't write this, just seeing how it works

'use strict';

function numberArray_element_mode(numberArray) {
  var counter = [],
    answer = 0;

  for(let i = 0; i < 10; i++) {
    counter.push(0);
    //console.log(counter);
  }
  for(let i = 0; i < numberArray.length; i++) {
    
    counter[numberArray[i] - 1]++;
    //console.log("counter[numberArray[i] at index: " + i + " = " + counter[numberArray[i]]);
    //console.log("counter[numberArray[i] - 1] at index: " + i + " = " + counter[numberArray[i] - 1]++);
    //console.log("counter[numberArray[i] - 1]++ at index: " + i + " = " + counter[numberArray[i] - 1]++);
    //console.log(counter[numberArray[i] - 1] + " : " + counter[answer] + " at index: " + i);
    console.log(
      "Checking current number: " + numberArray[i] +  " at index " + i + "  " +
      "Most frequent number: " + numberArray[counter[answer]] + " at index " + counter[answer] +  "  " +
      "How many times " + numberArray[i] + " has been seen: " + counter[numberArray[i] - 1] );    
    if(counter[numberArray[i] - 1] > counter[answer]) {
      answer = numberArray[i] - 1;
      // console.log(counter[numberArray[j]-1]);
    }
  }
  return answer + 1;  
}
console.log(numberArray_element_mode([8, 2, 3, 2, 2, 8, 1, 9]))