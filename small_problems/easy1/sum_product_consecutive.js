// var limit;
// var operation;
// var result;

function sumToN(n) {
  var sum = 0;
  var i;

  if (Array.isArray(n)) {
    sum = n.reduce(function (total, value) {
      return total + value;
    });
  } else {
    for (i = 1; i <= n; i += 1) {
      sum += i;
    }
  }

  return sum;
}

function productToN(n) {
  var product = 1;
  var i;

  if (Array.isArray(n)) {
    product = n.reduce(function (total, value) {
      return total * value;
    }, 1);
  } else {
    for (i = 2; i <= n; i += 1) {
      product *= i;
    }
  }
  return product;
}

limit = Number(prompt('Please enter an integer greater than 0:'));
operation = prompt('Enter "s" to compute the sum, or "p" to compute the product:');

if (operation === 's') {
  operation = 'sum';
  result = String(sumToN(limit));
} else if (operation === 'p') {
  operation = 'product';
  result = String(productToN(limit));
}
if (result) {
  console.log('The ' + operation + ' of the integers between 1 and ' + String(limit) +
              ' is ' + result + '.');
}

console.log(sumToN([27, -27, 5, -5, 33]));
console.log(productToN(6));
