
var entries = function(entry) {
  var list = []
  for (index = 1; index <= entry; index+=1) {
   if (index % 3 === 0) {
     list.push("ping");
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
  });
});
