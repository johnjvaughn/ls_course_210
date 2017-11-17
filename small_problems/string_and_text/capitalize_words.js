function wordCap(str) {
  return str.toLowerCase().replace(/(^|\s)[a-z]/g, function(match) {
    return match.toUpperCase();
  });
}

assertEqual("Four Score And Seven", wordCap, 'four score and seven');       // 
assertEqual("The Javascript Language", wordCap, 'the javaScript language');    // 
assertEqual('This Is A "quoted" Word', wordCap, 'this is a "quoted" word');    // 
