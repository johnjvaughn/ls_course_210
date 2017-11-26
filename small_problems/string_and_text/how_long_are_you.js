function wordLengths(str) {
  if (str === undefined) return [];
  str = str.trim();
  if (!str) return [];

  return str.split(/\s+/).map(function(word) {
    return word + ' ' + String(word.length);
  });
}

assertEqual(["cow 3", "sheep 5", "chicken 7"], wordLengths, 'cow sheep chicken');
assertEqual(["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"], wordLengths, 
            'baseball hot dogs and apple pie');
assertEqual(["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"], wordLengths, "It ain't easy, is it?");
assertEqual(["Supercalifragilisticexpialidocious 34"], wordLengths, "Supercalifragilisticexpialidocious");
assertEqual([], wordLengths, ' ');
assertEqual([], wordLengths, '');
assertEqual([], wordLengths);
