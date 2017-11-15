var BLOCK_SIDE_A = 'BXDCNGRFJHVLZ';
var BLOCK_SIDE_B = 'OKQPATESWUIYM';

function isBlockWord(word) {
  var usedBlockIndices = [];
  var i;
  var blockIndex;

  word = word.toUpperCase().replace(/[^A-Z]+/g, '');
  for (i = 0; i < word.length; i += 1) {
    blockIndex = BLOCK_SIDE_A.indexOf(word[i]);
    if (blockIndex < 0) blockIndex = BLOCK_SIDE_B.indexOf(word[i]);
    if (usedBlockIndices.includes(blockIndex)) return false;
    usedBlockIndices.push(blockIndex);
  }

  return true;
}

//iterate thru word chars, "grabbing" a block for each letter
//if we get to a letter whose block is already used, return false immediately
//if we finish with no problem getting all blocks, return true

//input: any lower case letters? any other chars mixed in?
//output: true, false --anything else if input invalid?

assertEqual(true, isBlockWord, 'FEAT');
assertEqual(true, isBlockWord, 'Feat');
assertEqual(true, isBlockWord, 'Fe..at ');
assertEqual(false, isBlockWord, 'BOAT');
assertEqual(false, isBlockWord, 'boat');
assertEqual(true, isBlockWord, '');
assertEqual(false, isBlockWord, 'lett.ers');
