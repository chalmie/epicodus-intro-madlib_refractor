$(document).ready(function() {
  // array for name of span ids
  var blanks = ["input1","input2","input3","input4","input5","input6"];
  // array for answers
  var answers = ["hotdog", "pizza", "jazz", "jumping", "swim", "freedom"]

  // loops for populating the madlib
  blanks.forEach(function(blank) {
    // puts the text into the correct span
    // this code works by taking the last character of a string in the blanks array with .slice(-1), changing it to an interger, then using that integer to refer to the correct location in answers array
    $('#' + blank).text(answers[parseInt(blank.slice(-1))]);
  });

  // forEach loop that will apply array value to correct span


});
