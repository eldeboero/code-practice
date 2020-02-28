const myArray = [
  'string 1',
  'another string',
  'yet another string'];

// join() adds array elements together
// default separator is a comma but other chars can be used
let output = myArray.join(' ');

// substr() is startIndex and length
let output2 = output.substr(24, 3);

// substring() and slice() are about the same?
// both are startIndex (inclusive) and endIndex (exclusive)
let output3 = output.substring(24,27);
let output4 = output.slice(24,27);

console.log(output);
console.log(output2);
console.log(output3);
console.log(output4);