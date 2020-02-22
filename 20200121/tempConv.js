/* Example 11

https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-11.php

Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C

Grrr -- This isn't math class...

c = ((f-32)/9)*5
f = ((c/5)*9)+32


*/
'use strict';
document.getElementById('compute').addEventListener('click', compute);
document.getElementById('reset').addEventListener('click', clearValues);

function compute() {
  const f = document.getElementById('f').value;
  const c = document.getElementById('c').value;
  if (f && c) {
    alert('Only enter one value, please');
    clearValues();
  } else if (f) {
    fToC(f);
  } else if (c) {
    cToF();
  } else {
    alert('Error: No values entered');
  }
}

function fToC(f) {
  f = document.getElementById('f').value;
  const c = ((f - 32) / 9) * 5;
  document.getElementById('c').value = Math.round(c);
}

function cToF(c) {
  c = document.getElementById('c').value;
  const f = ((c / 5) * 9) + 32;
  document.getElementById('f').value = Math.round(f);
}

function clearValues() {
  document.getElementById('f').value = '';
  document.getElementById('c').value = '';
}


/*

YAY!  I never peeked and mine is way better!

Sample Solution:

HTML Code:

<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Write a JavaScript program to convert temperatures to and from celsius, fahrenheit</title>
  </head>
  <body>
</body>
  </html>


Copy
JavaScript Code:

function cToF(celsius)
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit)
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}
cToF(60);
fToC(45);

*/
