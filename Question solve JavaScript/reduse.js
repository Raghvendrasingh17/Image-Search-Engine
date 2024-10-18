// Calls the specified callback function for all the elements in an array.
 //The return value of the callback function is the accumulated result, 
// and is provided as an argument in the next call to the callback function.
//The reduce() method is used to reduce the array to a single value and executes 
// a provided function for each value of the array (from left to right) and the return
// value of the function is stored in an accumulator

var arr = [88, 50, 25, 10];

// Perform reduce method
var sub = arr.reduce(geeks);

function geeks(total, num) {
    return total - num;
}

console.log(sub);
