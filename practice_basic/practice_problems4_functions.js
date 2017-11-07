//1.
function average(a, b, c) {
  return (a + b + c) / 3;
}

console.log(average(45, 103, 227));

//2.
function sum(a, b, c) {
  return a + b + c;
}

function average2(a, b, c) {
  return sum(a, b, c) / 3;
}

console.log(average2(45, 103, 227));

//3.
function average_array(arr) {
  var total = 0;
  for (i = 0, length = arr.length; i < length; i++) {
    total += arr[i];
  }
  return total / length;
}
console.log(average_array([45, 103, 227, 450, 333]));

//4.
function sum_array(arr) {
  var total = 0;
  for (i = 0, length = arr.length; i < length; i++) {
    total += arr[i];
  }
  return total;
}
function average_array2(arr) {
  return sum_array(arr) / arr.length;
}
console.log(average_array2([45, 103, 227, 450, 333]));


var temperatures = [-40, 32, 98.6, 212, 451];
console.log(average_array2(temperatures));