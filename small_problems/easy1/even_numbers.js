function evenNumbers() {
  var start = Number(prompt('Enter lower limit:'));
  var end = Number(prompt('Enter upper limit:'));
  var i = start;

  while (i <= end) {
    if (i % 2 === 0) console.log(i);
    i += 1;
  }
}

evenNumbers();
