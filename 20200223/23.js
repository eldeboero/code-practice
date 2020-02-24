/* https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

*/
'use strict';

window.onload = function() {
    document.getElementById('inputString').value = "";
    document.getElementById('outputString').value = "";
  };

document.getElementById('btnSwitchChars').addEventListener('click', switchChars);

function switchChars () {
  let myInput = document.getElementById('inputString').value;
  let myOuput = document.getElementById('outputString').value;
  if (myInput.length > 1) {
    const firstChar = myInput[0];
    const lastChar = myInput[myInput.length - 1];
    let switchedString = lastChar;
    for (let i = 1; i < myInput.length -1; i++) {
      switchedString = switchedString + myInput[i];
    }
    switchedString = switchedString + firstChar;
    document.getElementById('outputString').value = switchedString;
  }
  else {
    alert("Please enter a string longer than a single character")
  }
}

