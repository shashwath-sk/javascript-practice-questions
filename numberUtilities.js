// Q1. Write a JavaScript function (both regular and arrow) which takes an array of integers as paramater, 
// to get the largest even number. Return -1 if no even numbers are found.

const isEven = (number)=> number%2===0

function findLargestEvenNumber(numbers)
{
    let largestNumber = Number.NEGATIVE_INFINITY
    numbers.forEach(number => {
        isEven(number)?largestNumber=Math.max(largestNumber,number):null
    });
    return largestNumber>Number.NEGATIVE_INFINITY?largestNumber:-1
}

const findLargestEvenNumber2 = numbers =>
{
   let largestNumber = Number.NEGATIVE_INFINITY
    numbers.forEach(number => {
        isEven(number)?largestNumber=Math.max(largestNumber,number):null
    });
    return largestNumber>Number.NEGATIVE_INFINITY?largestNumber:-1
}
// numbers = [1,2,4,3,5,3,8,9,11,35,12]
// console.log(findLargestEvenNumber(numbers))
// console.log(findLargestEvenNumber2(numbers))
module.exports = findLargestEvenNumber; //testing for findLargestEvenNumber function
// Q2. Write a JavaScript function (both regular and arrow) which takes a number as param to check whether all the digits in a given number are the same or not,
// and print true or false. Consider numbers to have 2 digits or more.

function isSameDigit(number)
{
    let digit = number%10
    number = parseInt(number/10)
    while(number>0)
    {
        let digit2 = number%10
        number = parseInt(number/10)
        if(digit!==digit2)return false
    }
    return true
}

const isSameDigit2=(number)=>
{
    let digit = number%10
    number = parseInt(number/10)
    while(number>0)
    {
        let digit2 = number%10
        number = parseInt(number/10)
        if(digit!==digit2)return false
    }
    return true
}

console.log(isSameDigit(22))
console.log(isSameDigit(23))

console.log(isSameDigit2(23))
console.log(isSameDigit2(22))