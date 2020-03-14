/*
https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
#7
Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

*/

'use strict';

for (let year = 2014; year <= 2050; year++) {
  console.log(year + ': ' + testForSunday(year));
}

function testForSunday(yearToCheck) {
  const myDate = new Date('January 1, ' + yearToCheck);
  if (myDate.getDay() === 0) {
    return true;
  }
  else {
    return false;
  }
}
