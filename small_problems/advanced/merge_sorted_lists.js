/*
Problem:
  take two sorted arrays (of numbers) and return a new array containing all the elements in sorted order
  without simply sorting the concat of the two input arrays

  Input: two sorted arrays
  Output: one sorted array containing all elements (including repititions) in sorted order
  Side Effects: none

Examples:
  merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
  merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
  merge([], [1, 4, 5]);             // [1, 4, 5]
  merge([1, 4, 5], []);             // [1, 4, 5]
  merge([1, 2, 4], [2, 5, 8, 9])    // [1, 2, 2, 4, 5, 8, 9]

  (any possibility of non-number elements?)

Data/Algorithm:
  begin with copies of both arrays, and repeatedly shift() one of the arrays 
  (whichever has the smallest first value)

  loop 
    if arrA empty
      push rest of arrB to newArr and break
    else if arrB empty {
      push rest of arrA to newArr and break
    end
    if (arrA[0] < arrB[0]) 
      then newArr.push(shift arrA)
    else
      newArr.push(shift arrB)
    end
  end
*/

function merge(arr1, arr2) {
  var arrA = arr1.slice();
  var arrB = arr2.slice();
  var mergedArr = [];

  while (true) {
    if (arrA.length === 0) {
      return mergedArr.concat(arrB);
    } else if (arrB.length === 0) {
      return mergedArr.concat(arrA);
    }
    mergedArr.push((arrA[0] < arrB[0]) ? arrA.shift() : arrB.shift());
  }
}

array1 = [1, 5, 9];
array2 = [2, 6, 8];
console.log(merge(array1, array2));      // [1, 2, 5, 6, 8, 9]
console.log(array1);
console.log(array2);
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([1, 2, 4], [2, 5, 8, 9]));   // [1, 2, 2, 4, 5, 8, 9]
console.log(merge([], []));
