function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
}
const leapyearArrow = (year)=>
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
}

console.log(leapyear(2000))
console.log(leapyearArrow(2000))