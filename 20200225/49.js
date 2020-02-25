// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet. 

'use strict';
function addALetter(inputString) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let outputString = "";
  for (let i = 0; i < inputString.length; i++) {
    for (let j = 0; j < 26; j++) {
      if ((inputString[i] === alphabet[j]) && (j === 25)) {
        outputString = outputString + alphabet[0];
        j = 0;
        break;
      }
      if ((inputString[i] === alphabet[j]) && (j !== 25)) {
        outputString = outputString + alphabet[j+1];
        j = 0;
        break;
      }
    }
  }
  return outputString;  
}

console.log(addALetter("aBcxyz".toLowerCase()));

