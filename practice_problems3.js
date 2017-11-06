//1.
var apples = 3;
var bananas = 5;
if (apples == bananas) {
  console.log("3 Apples equal to 5 bananas!");
}

//2.
var bananas = '3';
if (apples == bananas) {
  console.log("3 Apples equal (==) to '3' bananas!");
}

//3.
if (apples === bananas) {
  console.log("3 Apples equal (===) to '3' bananas!");
}

//4. 
if (apples === bananas) {
  console.log("3 Apples equal (===) to '3' bananas!");
} else {
  console.log("3 Apples NOT equal (===) to '3' bananas!");  
}

//5.
if (apples === bananas) {
  console.log("Apples strictly equal to bananas!");
} else if (apples == bananas) {
  console.log("Apples equal but differently typed to bananas!");
} else {
  console.log("Apples NOT equal in any sense to bananas!");  
}

//6.
if (apples === bananas) {
  console.log("Apples strictly equal to bananas!");
} else {
  if (apples == bananas) {
    console.log("Apples equal but differently typed to bananas!");
  } else {
    console.log("Apples NOT equal in any sense to bananas!");  
  }
}

//7.
apples = 3;
bananas = 3;
areEqual = (apples === bananas);
console.log(areEqual);

//8.
bananas = undefined;
eitherOr = apples || bananas;
console.log(eitherOr);

//9.
bananas = 1;
eitherOr = apples || bananas;
console.log(eitherOr);
eitherOr = bananas || apples;
console.log(eitherOr);

//10.
var lastName = 'Vaughn';
var familyMessage;

familyMessage = lastName === 'Vaughn' ? "You're part of the family!" : "You're not family.";
console.log(familyMessage);

for (var i = 0; ; i += 1) {
  console.log(i);
  if (i >= 10) {
    break;
  }
}
for (var i = 0; i <= 10; i++) {
  console.log(i);
}

