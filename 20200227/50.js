// Write a JavaScript program to capitalize the first letter of each word of a given string

// My solution:  Split the string into an array, then loop through each word and append each
// letter to a finalString, performing logic along the way to detect if it's the first letter
// in the word (captialize) or last (append a ' ' after - except for the last word)

// Note: review substr() and join() methods - see book solution below

capWords = inputString => {
  //return inputString.toUpperCase();
  let words = inputString.split(' ');
  let finalString = '';
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j === 0) {
         finalString += words[i][j].toUpperCase();
        }
        else if (j === words[i].length - 1) {
          if ( i === words.length - 1) {
            finalString += words[i][j];
          }
          else {
            finalString += (words[i][j] + ' ');
          }
        }
        else {
          finalString += words[i][j];
        }
    }
  }
  return finalString;
}

console.log(capWords('test this string'));

/* --------------------------------------------------------------------------------------------------------------------
 Book solution:

function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));

*/