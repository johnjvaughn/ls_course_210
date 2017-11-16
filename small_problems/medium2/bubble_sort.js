function swap(obj, prop1, prop2) {
  var temp = obj[prop1];
  obj[prop1] = obj[prop2];
  obj[prop2] = temp;
}

function bubbleSort(arr) {
  var i;
  var swapped;

  do {
    swapped = false;
    for (i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
}


var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]