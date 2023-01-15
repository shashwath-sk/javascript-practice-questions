// Q3. Write a JavaScript function (both regular and arrow) which takes a string as parameter,
// to change the capitalization of all letters in a given string and returns the result and then print it.

const changeOperation = (char,STRING)=>
{
    let capital = /[A-Z]/
    switch(capital.test(char)+'')
            {
                case 'true' : STRING+=char.toLowerCase()
                              return STRING
                              break
                case 'false' : STRING+=char.toUpperCase()
                               return STRING
                               break

            }
}

function changeCase(string)
{
    let STRING =''
    string.split('').forEach(char=>
        {
            STRING = changeOperation(char,STRING)
        })
        console.log(STRING)
        return STRING
}

const changeCaseArrow = (string)=>
{
    let STRING =''
    string.split('').forEach(char=>
        {
            STRING = changeOperation(char,STRING)
        })
        // console.log(STRING)
        return STRING
}
const string = 'MeRRy hAD a LITTle lAMp'
// const changeStringCase = changeCase(string)
// console.log(changeCaseArrow(changeStringCase))



