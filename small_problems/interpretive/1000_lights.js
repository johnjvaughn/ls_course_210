function initializeLights(switches) {
  var switchArr = [];

  for (switchNum = 1; switchNum <= switches; switchNum += 1) {
    switchArr[switchNum] = false;
  }
  
  return switchArr;
}

function lightsOn(switches) {
  var switchArr = initializeLights(switches);
  var switchNum;
  var factor;

  for (factor = 1; factor <= switches; factor += 1) {
    for (switchNum = factor; switchNum <= switches; switchNum += factor) {
      switchArr[switchNum] = !switchArr[switchNum];
    }
  }

  return switchArr.map(function (lightState, index) {
    return lightState ? index : 0;
  }).filter(function (switchNum) {
    return (switchNum > 0);
  });
}

lightsOn(5);      // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);    // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

//data scructure: array of Boolean values starting all false or 'off'
//loop through the array once for each round of light switching
//each loop will mean switching multiples of 1, then multiples of 2, 3 and so on.
//build a new array of numbers corresponding to indices in switch array that are 'on' at the end

assertEqual([1, 4], lightsOn, 5);
assertEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100], lightsOn, 100);