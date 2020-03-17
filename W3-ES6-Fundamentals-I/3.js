/*
Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.

--- Provided solution:

//#Source https://bit.ly/2neWfJ2
const csv_to_array = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));

console.log(csv_to_array('a,b\nc,d')); 
console.log(csv_to_array('a;b\nc;d', ';')); 
console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true));

---

Break it down....

- csv_to_array() is called passing 3 arguments (data, delimiter, omitFirstRow)
    only the data argument is required, since delimiter and omitFirstRow have defaults specified
      (',' and false, respectively)
- then it calls 3 methods on data:

  slice(): 
    using a ternary operator and the omitFirstRow parameter, the program does one of two things:
      if omitFirstRow = true
        .slice(< index of first character after the first newline character in data > )
          (returns a new array containing only the data after the first newline)
            OR
      if omitFirtRow = false
        .slice(0)
          (this is the same as using the original array)


    split():
      using the array resulting from the previous slice(), split into a new array into lines (\n)
      
    map():
      using an arrow function, map does a split on each array (line) based on the specified delimiter (default ',')

    *** map()
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.


This is weird (cool) notation:
  object
    .method()
    .otherMethod()
    .yetAnotherMethod();

  I've not seen it written that way before, but since there are no semicolons, this should be equivalent to:
  object.method().otherMethod().yetAnotherMethod; 
  
  
I guess you would use this like this:

 let myArray = csv_to_array('tom, jerry, bill, ted');

which yields a multi-dimensional array (each element of the returned array contains an array containing the values from a row)

 console.log(myArray[0][1]); // second element of the first array = jerry

note: actually it's probably better to skip the assiging of a variable in this case:

  console.log(csv_to_array('tom, jerry, bill, ted')[0][1]); // second element of the first array = jerry

*/

// quick test to make sure my notation assumption is correct:


const csv_to_array1 = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));

const csv_to_array2 = (data, delimiter = ',', omitFirstRow = false) => data.slice(omitFirstRow ? data.indexOf('\n') + 1 : 0).split('\n').map(v => v.split(delimiter));

// spoiler: that worked - they are equivalent, but the first one is waaay prettier


console.log(csv_to_array1('bill,ted,fred,greg')[0][1]); // ted
console.log(csv_to_array2('bill,ted,fred,greg')[0][1]); // also ted

// testing multiline and parameters:

console.log(csv_to_array1('bill:ted:fred:greg\njohn:joe:tony:sam', ':', true)[0][1]); // split values on ':', omitFirstRow && return the second element from the (new) first line -- should return 'joe'
console.log(csv_to_array1('bill:ted:fred:greg\njohn:joe:tony:sam\njason:clark:bruce:james', ':', true)[1][1]); // split values on ':', omitFirstRow && return the second element from the (new) second line -- should return 'clark'