function swapCase(str) {
  return str.split('').map(function (char) {
    return (char >= 'a' && char <= 'z') ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}


assertEqual("cAMELcASE", swapCase, 'CamelCase');
assertEqual("tONIGHT ON xyz-tv", swapCase, 'Tonight on XYZ-TV');
