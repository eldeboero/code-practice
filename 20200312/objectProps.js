/* https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-1.php

Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

#Source https://bit.ly/2neWfJ2
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false

*/



// define 2 objects

const myObj = { age: 25, hair: 'long'};
const myObj2 = { age: 25, hair: 'short'};

/* 

Reference the value of a property using object notation (like array, but referencing the key name instead of index):

  console.log(myObj['age'] === myObj2['age']);  // true
  console.log(myObj['hair'] === myObj2['hair']);  // false

We can get an array of just the Object's key names using the "keys" method on the Object prototype:
  Object.keys(myObj); // ["age", "hair"]


The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. (had to look that up)

  Object.keys(myObj).every(key => myObj[key] !== 'nachos'); // return true, since none of the values are nachos
  Object.keys(myObj).every(key => myObj[key] !== 25); // return false, since one of the values is 25
  Object.keys(myObj).every(key => myObj[key] !== 'long'); // return false, since one of the values is 'long'


So the main logic is: "Check every key in the "source" object.  If the "obj" object has that key AND the value matches the same key in the "source" object, return true"

Then we wrap the whole thing in a second arrow function:

  const matches = (myObj, myObj2) =>
    (do the things)

result:

*/
  
const propsAllThere = (myObj, myObj2) => 
  Object.keys(myObj2).every(key => myObj.hasOwnProperty(key));  // this only checks each property is present, not the values



  
const propsAllMatch = (myObj, myObj2) => 
  Object.keys(myObj2).every(key => myObj.hasOwnProperty(key) && myObj[key] === myObj2[key]);  // props are all there AND their values match


// calling it:

console.log(propsAllThere(myObj, myObj2)); // true
console.log(propsAllMatch(myObj, myObj2)); // false