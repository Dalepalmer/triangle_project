describe('triangle', function(){
  it("is true if all three inputs are equal", function(){
    expect(triangle(2, 2, 2)).to.equal(true);
  });

  it("is true if only inputs are equal", function(){
    expect(triangle(2, 2, 4)).to.equal(true);
  });

  it("is true if all sides are not equal", function(){
    expect(triangle(1,2,3)).to.equal(true));
  });

  it("is false if it's not a triangle", function(){
    expect(triangle(2,2,8)).to.equal(true));
  });
});
