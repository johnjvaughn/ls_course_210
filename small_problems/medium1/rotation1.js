/*
Problem: 
accept an array, copy it, and on the copy, move the first element to the end of the array and return it
if input not an array, return undefined
if empty array, return empty array

Examples:
rotateArray([7, 3, 5, 2, 9, 1]);  =>  [3, 5, 2, 9, 1, 7]
rotateArray('non-array') => undefined
rotateArray([]) => []

Data/Algorithm:
Input: array (handle a non-array)
Output: a new array. if input was an array, shift the array, and push the retrieved element on to the end
i.e.
element = array.shift
array.push(element)
Side effects: none

*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr[0]);
}

const p = (value) => console.log(value);

p(rotateArray([7, 3, 5, 2, 9, 1])); [3, 5, 2, 9, 1, 7]
p(rotateArray(['one', 'two', 'three'])); ['two', 'three', 'one']
p(rotateArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [[4, 5, 6], [7, 8, 9], [1, 2, 3]]
p(rotateArray([9, 8, undefined, 6, 5, undefined])); // [8, undefined, 6, 5, undefined, 9]

p(rotateArray('non-array'));  // undefined
p(rotateArray([])); // []
p(rotateArray(['one']));  // ['one']
