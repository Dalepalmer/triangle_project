  var triangle = function(side1, side2, side3) {
    // Evaluates if the user's input is truly a triangle according to maths
    if (Math.pow(side1, 2) + Math.pow(side2, 2) > Math.pow(side3, 2) || Math.pow(side1, 2) + Math.pow(side3, 2) <= Math.pow(side2, 2) || Math.pow(side2, 2) + Math.pow(side3, 2) <= Math.pow(side1, 2)) {
      // Evaluates if the given triangle is an equilateral triangle
      if (side1 === side2 && side2 === side3 && side1 === side3) {
        return true;
        // Evaluates if
      } else if (side1 === side2 || side1 == side3 || side2 === side3) {
        return true;
      } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
        return true;
      };
    } else {
      return "That is not a triangle, sorry";
    }
  };


$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("intput#side3").val());
    var result = triangle(side1, side2, side3);

    $(".triangle").text(result);
    if (result) {
      $(".triangle").text("That is a triangle!");
    } else if (!results) {
      $(".not").text("That is not a triangle, sorry");
    }

    $("#result").show();
    event.preventDefault();
  });
});
