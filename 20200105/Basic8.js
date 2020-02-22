/*
https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
#8

Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 



*/

'use strict';

document.getElementById('guessButton').addEventListener("click", function () {
  const guessedValue = document.getElementById('guess').value;
  const randoVal = Math.floor(Math.random() * 10 + 1);
  if (parseInt(guessedValue) === randoVal) {
    alert('Guess: ' + guessedValue + ' Random: ' + randoVal + ' = MATCH!');
  }
  else {
    alert('Guess: ' + guessedValue + ' Random: ' + randoVal);
  }
});

/*

Book solution:

HTML Code:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Guess a number</title>
</head>
<body>
</body>
</html>


JavaScript Code:

// Get a random integer from 1 to 10 inclusive
 const num = Math.ceil(Math.random() * 10);
console.log(num);
 const gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
   console.log('Matched');
  else
   console.log('Not matched, the number was '+gnum);


*/