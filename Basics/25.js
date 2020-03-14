/* 
https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7. 
*/

'use strict';
function checkNumber(inputNumber) {
  if (parseInt(inputNumber) !== inputNumber) {
    return "Please enter a positive *integer*";
  }
  else if ( inputNumber < 1) {
    return "Please enter a *positive* integer";
  }
  else if ( inputNumber % 3 === 0 ) {
    return true;
  }
  else if ( inputNumber % 3 === 0 ) {
    return true;
  }
  else {
    return false;
  }
}



