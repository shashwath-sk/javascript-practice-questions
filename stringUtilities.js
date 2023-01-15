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
// input
// const string = 'MeRRy hAD a LITTle lAMp'
// const changeStringCase = changeCase(string)
// console.log(changeCaseArrow(changeStringCase))


// Q4. Write a JavaScript function (both regular and arrow) which takes an array of string as parameter ,
// to find the longest string from a given array (read about string methods)



function longestString(arrayOfString)
{
   let longest=''
   arrayOfString.forEach(string=>
    {
       string.length>longest.length?longest=string:null
    })
    return longest
}

const longestStringArrow=arrayOfString=>
{
    let longest=''
   arrayOfString.forEach(string=>
    {
       string.length>longest.length?longest=string:null
    })
    return longest
}

// input
// const arrayOfString = ["we", "love", "code", "academy"]
// console.log(longestString(arrayOfString))
// console.log(longestStringArrow(arrayOfString))

// Q6. Write a JavaScript function ( both regular and arrow function) which takes a string as parameter to test whether a string end with "Script"(case-sensitive). 
// The string length must be greater or equal to 6.

function endWithScript(string,endsWith)
{
    let stringLength = string.length
    let scriptIndex = stringLength-6
    if(scriptIndex<=0)return false
    switch(string.slice(scriptIndex)===endsWith){
        case true :  return true
        case false : return false
    }
}

const endWithScriptArrow = (string,endsWith)=>
{
    let stringLength = string.length
    let scriptIndex = stringLength-6
    if(scriptIndex<=0)return false
    switch(string.slice(scriptIndex)===endsWith){
        case true :  return true
        case false : return false
    }
}
console.log(endWithScript('javaScript','Script'))
console.log(endWithScriptArrow('Script','Script'))

