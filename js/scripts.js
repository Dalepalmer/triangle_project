  var triangle = function(side1, side2, side3) {
    // Evaluates if the user's input is truly a triangle according to maths
    if (Math.pow(side1, 2) + Math.pow(side2, 2) > Math.pow(side3, 2) || Math.pow(side1, 2) + Math.pow(side3, 2) <= Math.pow(side2, 2) || Math.pow(side2, 2) + Math.pow(side3, 2) <= Math.pow(side1, 2)) {
      // Evaluates if the given sides are an equilateral triangle.
      if (side1 === side2 && side2 === side3 && side1 === side3) {
        return "That's an equilateral triangle!";
        // Evaluates if the given sides are an isosceles triangle.
      } else if (side1 === side2 || side1 == side3 || side2 === side3) {
        return "That's an isosceles triangle!";
        // Evalutates if the given sides are an scalene triangle.
      } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
        return "That's a scalene triangle!";
      };
    } else {
      return "That is not a triangle, sorry";
    }
  };


  $(document).ready(function() {
    $("form#triangle").submit(function(event) {
      var side1 = parseFloat($("input#side1").val());
      var side2 = parseFloat($("input#side2").val());
      var side3 = parseFloat($("input#side3").val());
      var result = triangle(side1, side2, side3);

      $(".triangleResult").text(result);
      $("#result").show();
      event.preventDefault();
    });
  });
