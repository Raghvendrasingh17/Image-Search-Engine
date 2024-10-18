// The Array.map() method allows you to iterate over an array and modify its elements using a callback function.
// The callback function will then be executed on each of the array's elements.

var numbers = [1, 2, 3, 4, 5];

var temp = numbers.map(function(number)
 {
  return number * 4;
});

console.log(temp); 
