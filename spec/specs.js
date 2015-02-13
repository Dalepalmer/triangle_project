describe('triangle', function(){
  it("is true if all three inputs are equal", function(){
    expect(triangle(2, 2, 2)).to.equal("That's an equilateral triangle!");
  });

  it("is true if only inputs are equal", function(){
    expect(triangle(2,2,1)).to.equal("That's an isosceles triangle!");
  });

  it("is true if all sides are not equal", function(){
    expect(triangle(3,2.5,2)).to.equal("That's a scalene triangle!");
  });

  it("is false if it's not a triangle", function(){
    expect(triangle(2,2,8)).to.equal("That is not a triangle, sorry");
  });
});
