/*
https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
#6

Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

*/

'use strict';
document.getElementById("checkButton").addEventListener("click", function () {
  const yearToCheck = document.getElementById("yearInput").value;
  //console.log(typeof yearToCheck);
  const myDate = new Date('February 29, ' + yearToCheck);
  //alert(myDate.getMonth() + '/' + myDate.getDate() + '/' + myDate.getFullYear());
  if (myDate.getDate() === 29) {
    alert(yearToCheck + ' is a leap year!');
  }
  else {
    alert(yearToCheck + ' is NOT a leap year');
  }
});

/*

Book Answer:

// Note:  I made this too difficult, since I didn't remember the simple rule to calculate if a year is a leap year
// e.g. year % 100 === 0 // look for even century
//      year % 400 === 0 // Every 4th even century IS a leap year
//      year % 4 === 0   // Every non-00 year divisible by 4 is a leap year




function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));

*/
