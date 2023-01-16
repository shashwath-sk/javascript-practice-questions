
// const { default: test } = require('node:test')
const changeCase = require('./stringUtilities').changeCase
const replaceCharacter = require('./stringUtilities').replaceCharacter
const countVowels = require('./stringUtilities').countVowels
const stringConcatenation2 = require('./stringUtilities').stringConcatenation2
const endWithScript = require('./stringUtilities').endWithScript
const longestString = require('./stringUtilities').longestString


// Q3. Write a JavaScript function (both regular and arrow) which takes a string as parameter, to change the capitalization of all letters in a given string and returns the result and then print it.
test('change the capitalization of all letters in a given string and returns the result',()=>
{
    expect(changeCase('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP')
})

test('change the capitalization of all letters in a given string and returns the result',()=>
{
    expect(changeCase('IM SHASHWATH S K')).toBe('im shashwath s k')
})

test('change the capitalization of all letters in a given string and returns the result',()=>
{
    expect(changeCase('codeAcedemy isCrazy')).toBe('CODEaCEDEMY IScRAZY')
})

// Q4. Write a JavaScript function (both regular and arrow) which takes an array of string as parameter to find the longest string from a given array (read about string methods)


test('find the longest string from a given array ',()=>{
    expect(longestString(["we", "love", "code", "academy"])).toBe("academy");
})

test('find the longest string from a given array ',()=>{
    expect(longestString(["code","academy","isCrazy!!!!"])).toBe("isCrazy!!!!");
})

test('find the longest string from a given array ',()=>{
    expect(longestString(["Mckinsey","employees","are","cool"])).toBe("employees");
})

// Q6. Write a JavaScript function ( both regular and arrow function) which takes a string as parameter to test whether a string end with "Script"(case-sensitive). The string length must be greater or equal to 6.
test('test whether a string end with "Script"(',()=>{
    expect(endWithScript("javaScript")).toEqual(true);
})

test('ftest whether a string end with "Script"( ',()=>{
    expect(endWithScript("isCrazy!!!!")).toEqual(false);
})

test('test whether a string end with "Script"( ',()=>{
    expect(endWithScript("Script")).toEqual(false);
})

// Q7. Write a JavaScript function ( both regular and arrow function) which takes an array of 2 strings as parameter to concatenate two strings except their first character.

// test('concatenate two strings except their first character',()=>{
//     expect(stringConcatenation2(["code", "academy"])).toEqual("odecademy");
// })

// test('concatenate two strings except their first character',()=>{
//     expect(stringConcatenation2("code","isCrazy!!!!")).toEqual("odesCrazy!!!!");
// })

// test('concatenate two strings except their first character',()=>{
//     expect(stringConcatenation2("Shell","Script")).toEqual("hellcript");
// })


// Q8. Write a JavaScript function ( both regular and arrow function) which takes a string as parameter to count the number of vowels in a given string.
   
    // test('takes a string as parameter to count the number of vowels in a given string',()=>{
    //     expect(countVowels(["codeacademy"])).toBe(5);
    // })
    
    test('takes a string as parameter to count the number of vowels in a given string',()=>{
        expect(countVowels("codeisCrazy!!!!")).toBe(4);
    })
    
    test('takes a string as parameter to count the number of vowels in a given string',()=>{
        expect(countVowels("ShellScript")).toBe(2);
    })

// Q9. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

// test('replace every character in a given string with the character following it in the alphabet',()=>{
//     expect(replaceCharacter(["codeacademy"])).toBe("dpefbdbefnz");
// })

test('replace every character in a given string with the character following it in the alphabet',()=>{
    expect(replaceCharacter("lazyinterns")).toBe("mbazjoufsot");
})

test('replace every character in a given string with the character following it in the alphabet',()=>{
    expect(replaceCharacter("activeseniors")).toBe("bdujwftfojpst");
})