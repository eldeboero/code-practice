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
Looks like the HTML is pretty irrelevant - it's just there to be a container for the element that gets created in js

Practical application: When you want to provide a button to copy the contents of an element to the clipboard so the user can paste it into another application.
This would allow you to escape the browser -----


select()
https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
The HTMLInputElement.select() method selects all the text in a <textarea> element or in an <input> element that includes a text field.



document.getSelection()
https://developer.mozilla.org/en-US/docs/Web/API/Selection
A Selection object represents the range of text selected by the user or the current position of the caret


rangeCount
https://developer.mozilla.org/en-US/docs/Web/API/Selection/rangeCount
The Selection.rangeCount read-only property returns the number of ranges in the selection.
Before the user has clicked a freshly loaded page, the rangeCount is 0. After the user clicks on the page, rangeCount is 1, even if no selection is visible.


getRangeAt(0)
https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
The Selection.getRangeAt() method returns a range object representing one of the ranges currently selected.


document.execCommand('copy');
https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Commands
**** OBSOLETE?! Thanks, W3Schools...

Rebuilding this so you can put text in an input and copy it
Okay - this works, but uses the same obsolete execCommand method that the example did.

*/


'use strict';

document.getElementById('copierBtn').addEventListener('click', copyToClipBoard);

function copyToClipBoard() {
  const inputElement = document.getElementById('inputText');
  const outputElement = document.getElementById('outputText');
  inputElement.select();
  document.execCommand('copy');
}
