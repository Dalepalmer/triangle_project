  var triangle = function(side1, side2, side3) {
    if (Math.pow(side1, 2) + Math.pow(side2, 2) > Math.pow(side3, 2) || Math.pow(side1, 2) + Math.pow(side3, 2) <= Math.pow(side2, 2) || Math.pow(side2, 2) + Math.pow(side3, 2) <= Math.pow(side1, 2)) {
      if (side1 === side2 && side2 === side3 && side1 === side3) {
        return true;
      } else if (side1 === side2 || side1 == side3 || side2 === side3) {
        return true;
      } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
        return true;
      };
    } else {
      return "That is not a triangle, sorry";
    }
  };
