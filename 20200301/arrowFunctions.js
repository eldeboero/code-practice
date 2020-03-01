// arrow functions are anonymous by definition

// assign an anonymous function to the const "contents"
// the function takes the single parameter and prepends text]

const contents = val => "Some text and then " + val;


// This is super-confusing, because it *looks* like calling a
// a named function (contents()), but it's really just a reference to a variable
// that contains an anonymous function

console.log(contents('this gets added'));