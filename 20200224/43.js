/* 
https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
*/


// I had to peek to see the exact mechanism for determining the rightmost digit.
// I guess I need to start thinking about modulus more, because to get the right-most digit, you can use % 10

function compareRightDigits (a, b, c) {
  return (a % 10 === b % 10) || (a % 10 === c % 10) || (b % 10 === c % 10);
}

console.log(compareRightDigits(3,23,3003));

console.log(compareRightDigits(3,23,3002));

console.log(compareRightDigits(8,23,3003));

console.log(compareRightDigits(4,55,3004));

console.log(compareRightDigits(6,23,3007));