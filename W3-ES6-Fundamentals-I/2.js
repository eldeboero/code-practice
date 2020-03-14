/*

Write a JavaScript program to copy a string to the clipboard.

***HTML**************************************************************************************************

https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-2.php

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Copy a string to the clipboard</title>
</head>
<body>

</body>
</html>

***JS************************************************************************************************

//#Source https://bit.ly/2neWfJ2
  const copy_to_Clipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};


*****************************************************************************************************

This should be clear that we using an arrow function to to the thing.
  const copy_to_Clipboard = str =>


Looks like the HTML is pretty irrelevant - it's just there to be a container for the element that gets created in js

Practical application: When you want to provide a button to copy the contents of an element to the clipboard so the user can paste it into another application.
This would allow you to escape the browser -----

*/

'use strict';

document.getElementById('copier').addEventListener('click', copyToClipBoard);

function copyToClipBoard() {
  const newEl = document.createElement('myText');
  newEl.setAttribute('read-only','');
  document.body.appendChild(newEl);
  console.log('wtf');
}
