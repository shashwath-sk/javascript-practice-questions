const isEven = (number)=> number%2===0

function findLargestEvenNumber(numbers)
{
    let largestNumber = -1
    numbers.forEach(number => {
        isEven(number)?largestNumber=Math.max(largestNumber,number):null
    });
    return largestNumber
}

const findLargestEvenNumber2 = numbers =>
{
    let largestNumber = -1
    numbers.forEach(number => {
        isEven(number)?largestNumber=Math.max(largestNumber,number):null
    });
    return largestNumber
}
numbers = [1,2,4,3,5,3,8,9,11,35,12]
console.log(findLargestEvenNumber(numbers))
console.log(findLargestEvenNumber2(numbers))