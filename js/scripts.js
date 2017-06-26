
var entries = function(entry) {
  var list = []
  for (index = 1; index <= entry; index+=1) {
   if (index % 3 === 0) {
     list.push("ping");
   } else if (index % 5 === 0) {
     list.push("pong");
   }  else if (index % 15 === 0) {
     list.push("pingpong");
   } else {
    list.push(index);
   }
 }
 return list;
 console.log("var list: ", list);
};

$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var entry = parseInt($("input#entry").val());
    var results = entries(entry);
    console.log(results);
    $("#result ol").text(results )
  });
});
