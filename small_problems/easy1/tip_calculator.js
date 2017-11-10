function tipCalc() {
  var bill = Number(prompt('What is the bill?'));
  var tipPercent = Number(prompt('What is the tip percentage?'));
  var tip = bill * (tipPercent / 100);
  var total = bill + tip;

  console.log('The tip is $' + tip.toFixed(2));
  console.log('The total is $' + total.toFixed(2));
}

tipCalc();
