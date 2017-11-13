
function formatDate(date) {
  return date.toDateString();  // Sun Jan 10 2000
}

function mailCount(emailData) {
  var emails = emailData.split(/##\|\|##/);
  var emailCount = emails.length;
  var dates;
  var date;

  dates = emails.map(function (email) {
    date = email.split(/#\/#/)[2]; // date is the 3rd item in each email
    date = date.replace(/[^\d\-]*/g, ''); // remove everything but actual date YYYY-MM-DD
    return new Date(date); // turn into a Date object
  }).sort(function datesAsc(a, b) {
    return a.getTime() - b.getTime();
  });

  console.log('Count of Email: ' + emailCount);
  console.log('Date Range: ' + formatDate(dates[0]) + ' - ' + formatDate(dates[emailCount - 1]));
}

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016