var longText = 'Four score and seven years ago our fathers brought forth' +
' on this continent a new nation, conceived in liberty, and' +
' dedicated to the proposition that all men are created' +
' equal.' +
' Now we are engaged in a great civil war, testing whether' +
' that nation, or any nation so conceived and so dedicated,' +
' can long endure. We are met on a great battlefield of that' +
' war. We have come to dedicate a portion of that field, as' +
' a final resting place for those who here gave their lives' +
' that that nation might live. It is altogether fitting and' +
' proper that we should do this.' +
' But, in a larger sense, we can not dedicate, we can not' +
' consecrate, we can not hallow this ground. The brave' +
' men, living and dead, who struggled here, have' +
' consecrated it, far above our poor power to add or' +
' detract. The world will little note, nor long remember' +
' what we say here, but it can never forget what they' +
' did here. It is for us the living, rather, to be dedicated' +
' here to the unfinished work which they who fought' +
' here have thus far so nobly advanced. It is rather for' +
' us to be here dedicated to the great task remaining' +
' before us -- that from these honored dead we take' +
' increased devotion to that cause for which they gave' +
' the last full measure of devotion -- that we here highly' +
' resolve that these dead shall not have died in vain' +
' -- that this nation, under God, shall have a new birth' +
' of freedom -- and that government of the people, by' +
' the people, for the people, shall not perish from the' +
' earth.';

var rottenTomatoesText = 'In 6th grade, when Grae Drake was arranging movie outings for all her friends, she picked the movie. Through the years - studying film at the University of Texas at Austin, being honored by Sundance and the Director\'s Guild of America, and working as a filmmaker in Los Angeles - she realized how terrible she was at keeping her opinions to herself, leading to the birth of Grae\'s The Popcorn Mafia podcast.'

function longestSentence(text) {
  var sentences = text.match(/\w[^.?!]*[.?!]/g) || [];
  var maxWordCount = 0;
  var maxWordSentence = '';
  var words;
  
  sentences.forEach(function (sentence) {
    words = sentence.split(/ +/); //or use / +\-+ +/ to not count isolated hyphens or dashes ('--') as words
    if (words.length > maxWordCount) {
      maxWordCount = words.length;
      maxWordSentence = sentence;
    }
  });
  
  console.log(maxWordSentence);
  console.log('The longest sentence has ' + String(maxWordCount) + ' words.');
}

longestSentence(longText);
longestSentence('no period. at end of');

// console output

// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.
