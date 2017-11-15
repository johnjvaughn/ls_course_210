function setRailCycle(numRails) {
  var railCycle = [];
  var rail;

  for (rail = 0; rail < numRails; rail += 1) {
    railCycle.push(rail);
  }

  for (rail = numRails - 2; rail > 0; rail -= 1) {
    railCycle.push(rail);
  }

  return railCycle;
}

function railFenceEncode(messageStr, numRails) {
  var codedRails = [];
  var railCycle = setRailCycle(numRails);
  var railCycleLen = railCycle.length;
  var currentRail;
  var rail;
  var i;

  messageStr = messageStr.replace(/\s+/g, '');
  for (rail = 0; rail < numRails; rail += 1) {
    codedRails.push('');
  }

  for (i = 0; i < messageStr.length; i += 1) {
    currentRail = railCycle[i % railCycleLen];
    codedRails[currentRail] += messageStr[i];
  }

  return codedRails.join('');
}

/*
'THISISAMESSAGE', 3
encodes to
T.....A.....G.
.H...S.M...A.E
..I.I...E.S... 
...S.....S

case insensitive
iterate thru message string, push letters onto alternate lines
on each iteration, for the rails that aren't getting a letter, push a dot instead

data structure: array of strings (each string = one rail)
*/

assertEqual('TIEGHSSMSAEIAS', railFenceEncode, 'THISISAMESSAGE', 3);
assertEqual('TIIAESGHSSMSAE', railFenceEncode, 'THISISAMESSAGE', 2);
assertEqual('TAGHSMAEIIESSS', railFenceEncode, 'THISISAMESSAGE', 4);

//p(railFenceEncode('WE ARE DISCOVERED FLEE AT ONCE', 1));
