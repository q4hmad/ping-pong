var entries = function(entry) {
  if (entry % 15 === 0) {
    return ("ping pong");
  } else if (entry % 5 === 0) {
    return ("pong");
  } else if (entry % 3 === 0) {
    return ("ping pong");
  } else {
    return entry;
  }
};









$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var entry = parseInt($("input#entry").val());
    var result = entries(entry);
    $("#result").text(result);
  });
});
