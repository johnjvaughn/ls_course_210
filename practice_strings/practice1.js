//1.
var firstName = 'John';
var lastName = 'Vaughn';
var fullName = firstName + ' ' + lastName;

console.log(fullName);

//2.
console.log(firstName.concat(lastName));

//3.
var nameArr = fullName.split(' ');
console.log(nameArr);

//4.
var language = 'JavaScript';
var idx = language.indexOf('S');
console.log(idx);

//5.
var charCode = language.charCodeAt(idx);
console.log(charCode);

//6.
console.log(String.fromCharCode(charCode));

//7.
console.log(language.lastIndexOf('a'));

//8.
var a = 'a';
var b = 'b';
console.log(a > b);
b = 'B';
console.log(a > b);

//9.
var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

//10.
console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

//11.
var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too';
var compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);

//12.
console.log(fact1[0], fact2[0]);

//13.
var pi = (22 / 7);
pi = pi.toString();
console.log(pi.lastIndexOf('14'));

//14.
var boxNumber = (356).toString();
console.log(boxNumber);

//15.
boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);
boxNumber = String(boxNumber);
console.log(typeof boxNumber);

//16.
var name = prompt("What is your name?");
if (name.endsWith('!')) {
  name = name.slice(0, -1).toUpperCase();
  console.log('HELLO ' + name + '. WHY ARE WE SCREAMING?');
} else {
  console.log('Hello ' + name + '.');
}
