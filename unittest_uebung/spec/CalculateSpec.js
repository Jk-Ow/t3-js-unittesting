
describe('Calculate', function() {
  let va;
  let vb;

  it('should be able to add two numbers', function() {
    va = 4;
    vb = 6;
    expect(addition(va,vb)).toEqual(va+vb);
  });

  it('should be able to subtract value a from value b', function(){
    va = 7;
    vb = 4;
    expect(subtraction(va,vb)).toEqual(va-vb);
  });

  it('should be able to potentiate value a with value b',function(){
    va = 8;
    vb = 2;
    expect(power(va,vb)).toEqual(Math.pow(va,vb));
  });

});
