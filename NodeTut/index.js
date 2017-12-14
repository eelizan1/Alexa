var myArr = [1, 2, 3, true, 'john'];

for(var i = 0; i < myArr.length; i++) {
  // prints out array denoted elements with `${}`
  // note: use tick marks
  console.log(`${i} element is ${myArr[i]}`);
}

console.log("-----------------");

// regular function
function sayHi(name) {
  console.log("hi " + name);
}

// anonymous function
// because this is assigned to another variable - you can pass this variable to another function
// and it can be used as a callback
var sayHiAgain = function(name) {
  console.log("hi " + name);
}
sayHi('Enrico');

// Example of using anonymous functions
function callHi(func, name) {
  func(name);
}

// same thing as the funcion above
callHi(function(name) {
  console.log("hi " + name);
}, 'Joe');

callHi(sayHiAgain, 'Mike'); // calls sayHiAgain with name 'mike'
