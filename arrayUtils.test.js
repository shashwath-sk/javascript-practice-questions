const {doubleNumbers,filterNumbers,tripleThenFilter} = require('./arrayUtils');

describe('Array Utilities',()=>
{
  describe('Double Number',()=>
  {
    it('Should double array elements when given number array',()=>
    {
      const result = doubleNumbers([1,2,3]);
      expect(result).toEqual([2,4,6]);
    }),
    it('Should return type error when input is not an array',()=>
    {
      expect(()=>
      {
        doubleNumbers('abc');
      }).toThrow(TypeError);
    });
  });

  describe('Filter Numbers',()=>
  {
    it('Should retrun array of even numbers when given array of numbers',()=>
    {
      const numbers = filterNumbers([1,2,3,4,5,6,7,8]);
      expect(numbers).toEqual([2,4,6,8]);
    }),
    it('Should return typr error when input is NaN excluding number array',()=>
    {
      expect(()=>{
        filterNumbers('def');
      }).toThrow(TypeError);
    });
  });

  describe('Tripel number then filter',()=>
  {
    it('Should retrun array of even numbers when given array of numbers',()=>
    {
      const numbers = tripleThenFilter([1,2,3,4]);
      expect(numbers).toEqual([6,12]);
    }),
    it('Should return typr error when input is NaN excluding number array',()=>
    {
      expect(()=>{
        tripleThenFilter('def');
      }).toThrow(TypeError);
    });
  });
});