//1.
var title = 'The Three-Body Problem';

//2.
var title = 'The Three-Body Problem';
var author = 'Cixin Liu';
var page_count = 400;

//3.
var completed = lastPageRead === 400;

//4.
if (finishedBook()) {
  console.log('You have finished reading this book');
}

//5.
function read(pages) {
  var i;
  var message;

  console.log('You started reading.');
  for (i = 0; i < pages; i += 1) {
    message = 'You read page ' + String(i);
    console.log(message);
  }
}

read(400);