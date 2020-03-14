/* 
https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
*/


'use strict';
function checkNumbers(a, b){
  if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(checkNumbers(1,5));
console.log(checkNumbers(1,51));
console.log(checkNumbers(81,5));
console.log(checkNumbers(-51,-55));
console.log(checkNumbers(99,101));
console.log(checkNumbers(100,500));

