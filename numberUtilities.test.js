const findLargestEvenNumber = require('./numberUtilities')

test('find largest even number in a array',()=>{
    expect(findLargestEvenNumber([1, 2, 3, 4, 5])).toBe(4);
})

test('find largest even number in a array',()=>{
    expect(findLargestEvenNumber([1, 3, 5])).toBe(-1);
})

test('find largest even number in a array',()=>{
    expect(findLargestEvenNumber([-10,-8,-2,5,9])).toBe(-2);
})

test('find largest even number in a array',()=>{
    expect(findLargestEvenNumber([1,-5,7,5,3])).toBe(-1);
})