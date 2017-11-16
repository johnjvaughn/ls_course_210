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

function mergeSort(arr) {
  var subArr1;
  var subArr2;

  if (arr.length === 1) return arr;
  subArr1 = arr.slice(0, arr.length / 2);
  subArr2 = arr.slice(arr.length / 2);
  subArr1 = mergeSort(subArr1);
  subArr2 = mergeSort(subArr2);

  return merge(subArr1, subArr2);
}


assertEqual([1, 5, 7, 9], mergeSort, [9, 5, 7, 1]);           // [1, 5, 7, 9]
assertEqual([3, 5], mergeSort, [5, 3]);                 // [3, 5]
assertEqual([1, 2, 4, 6, 7], mergeSort, [6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

assertEqual(["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"], mergeSort, 
            ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

assertEqual([1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54], mergeSort,
            [7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]