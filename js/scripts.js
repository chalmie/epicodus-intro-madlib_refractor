$(document).ready(function() {
  // build array
  var blanks = ["input1","input2","input3","input4","input5","input6"];

  // test loop to confirm that blanks is constructed right
  blanks.forEach(function(blank) {
    var arrayWord = blank;
    // alert(arrayWord);
    // puts the text into the corrent span
    $('#' + blank).text(blank);
  });

  // forEach loop that will apply array value to correct span


});
