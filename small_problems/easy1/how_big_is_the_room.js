function howBig() {
  var SQ_FEET_PER_SQ_METER = 10.7639;
  
  var length = Number(prompt('Enter the length of the room in meters:'));
  var width = Number(prompt('Enter the width of the room in meters:'));
  var areaSM = length * width;
  var areaSF = SQ_FEET_PER_SQ_METER * areaSM;

  console.log('The area of the room is ' + areaSM.toFixed(2) + ' square meters (' +
              areaSF.toFixed(2) + ' square feet).');
}

howBig();
