function oddNumbers() {
  var start = Number(prompt('Enter lower limit:'));
  var end = Number(prompt('Enter upper limit:'));
  var i = start;

  while (i <= end) {
    if (i % 2 === 1) console.log(i);
    i += 1;
  }
}

oddNumbers();
