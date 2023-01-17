const doubleNumbers = (numbers) => { 
  try
  {
    return numbers.map( number=> number*2);
  }
  catch(err)
  {
    throw new TypeError();
  }
};

const filterNumbers = (numbers)=>{
  try
  {
    return numbers.filter(number=>number%2===0);
  }
  catch(err)
  {
    throw new TypeError();
  }
};

// const tripleAndFilter = (numbers) =>
// {
//     try
//     {
//         numbers = numbers.map( number=> number*3)
//         return numbers.filter(number=>number%2===0)
//     }
//     catch(err)
//     {
//         throw new TypeError()
//     }
// }

const tripleThenFilter = (numbers)=>
{
  try{
    const result = numbers.reduce((evenNumbers,number)=>{
      number = number *3;
      if(number%2===0)
      {
        return [...evenNumbers,number];
      }
      return evenNumbers;
    },[]);
    return result;
  }
  catch(err)
  {
    throw new TypeError();
  }
    
};
module.exports = {doubleNumbers,filterNumbers,tripleThenFilter};
