function binarySearch(arr, search) {
  var low = 0;
  var high = arr.length - 1;
  var middle;

  while (high >= low) {
    middle = Math.floor((high + low) / 2);
    if (arr[middle] === search) return middle;
    if (arr[middle] > search) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return -1;
}

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 
                   'Good Food', 'Pasta Place', 'Pizzeria', 'Ruby Lounge', 'Zooper'];

assertEqual(7, binarySearch, yellowPages, 'Pizzeria');                   // 7
assertEqual(0, binarySearch, yellowPages, 'Apple Store');                // 0

assertEqual(-1, binarySearch, [1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
assertEqual(7, binarySearch, [1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
assertEqual(1, binarySearch, [1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

assertEqual(-1, binarySearch, ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
assertEqual(6, binarySearch, ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6
