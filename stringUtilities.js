// Q3. Write a JavaScript function (both regular and arrow) which takes a string as parameter,
// to change the capitalization of all letters in a given string and returns the result and then print it.

const changeOperation = (char, STRING) => {
  let capital = /[A-Z]/;
  switch (capital.test(char) + '') {
  case 'true': STRING += char.toLowerCase();
    return STRING;
  case 'false': STRING += char.toUpperCase();
    return STRING;
  }
};

function changeCase(string) {
  let STRING = '';
  string.split('').forEach(char => {
    STRING = changeOperation(char, STRING);
  });
  console.log(STRING);
  return STRING;
}

const changeCaseArrow = (string) => {
  let STRING = '';
  string.split('').forEach(char => {
    STRING = changeOperation(char, STRING);
  });
  // console.log(STRING)
  return STRING;
};
// input
// const string = 'MeRRy hAD a LITTle lAMp'
// const changeStringCase = changeCase(string)
// console.log(changeCaseArrow(changeStringCase))

// Q4. Write a JavaScript function (both regular and arrow) which takes an array of string as parameter ,
// to find the longest string from a given array (read about string methods)

// we can do it using reduce (used when we need single output from array)


function longestString(arrayOfString) {
  let longest = '';
  arrayOfString.forEach(string => {
    string.length > longest.length ? longest = string : null;
  });
  return longest;
}

const longestStringArrow = arrayOfString => {
  let longest = '';
  arrayOfString.forEach(string => {
    string.length > longest.length ? longest = string : null;
  });
  return longest;
};

// input
// const arrayOfString = ["we", "love", "code", "academy"]
// console.log(longestString(arrayOfString))
// console.log(longestStringArrow(arrayOfString))
// Q6. Write a JavaScript function ( both regular and arrow function) which takes a string as parameter to test whether a string end with "Script"(case-sensitive). 
// The string length must be greater or equal to 6.

function endWithScript(string, endsWith) {
  let stringLength = string.length;
  let scriptIndex = stringLength - 6;
  if (scriptIndex <= 0) return false;
  switch (string.slice(scriptIndex) === endsWith) {
  case true: return true;
  case false: return false;
  }
}

const endWithScriptArrow = (string, endsWith) => {
  let stringLength = string.length;
  let scriptIndex = stringLength - 6;
  if (scriptIndex <= 0) return false;
  switch (string.slice(scriptIndex) === endsWith) {
  case true: return true;
  case false: return false;
  }
};
// console.log(endWithScript('javaScript','Script'))
// console.log(endWithScriptArrow('Script','Script'))

// Q7. Write a JavaScript function ( both regular and arrow function) which takes an array of 2 strings as parameter to concatenate two strings except their first character

function stringConcatenation(stringArr) {
  const concatenateString = '' + stringArr[0].slice(1) + stringArr[1].slice(1);
  return concatenateString;
}
const stringConcatenation2 = (stringArr) => {
  const concatenateString = '' + stringArr[0].slice(1) + stringArr[1].slice(1);
  return concatenateString;
};
const stringArr = ['codeacademy', 'isCrazy'];
console.log(stringConcatenation(stringArr));

// Q8. Write a JavaScript function ( both regular and arrow function) which takes a string as parameter to count the number of vowels in a given string.

function countVowels(string) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  string.split('').forEach(char => {
    vowels.includes(char) ? count += 1 : null;
  });
  return count;
}

const countVowels2 = (string) => {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  string.split('').forEach(char => {
    vowels.includes(char) ? count += 1 : null;
  });
  return count;
};
// console.log(countVowels2("codeacademy"))

// Q9. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

function replaceCharacter(string) {
  let replacedStr = '';
  string.split('').forEach(char => {
    let unicode = char.charCodeAt();
    unicode === 90 ? unicode = 64 : null;
    unicode === 122 ? unicode = 96 : null;
    let replacedChar = String.fromCharCode(unicode + 1);
    replacedStr += replacedChar;
  });
  return replacedStr;
}

const replaceCharacter2 = (string) => {
  let replacedStr = '';
  string.split('').forEach(char => {
    let unicode = char.charCodeAt();
    unicode === 90 ? unicode = 64 : null;
    unicode === 122 ? unicode = 96 : null;
    let replacedChar = String.fromCharCode(unicode + 1);
    replacedStr += replacedChar;
  });
  return replacedStr;
};
// const string = "codeacademy"
// console.log(replaceCharacter(string))

module.exports = {
  replaceCharacter: replaceCharacter,
  countVowels: countVowels,
  stringConcatenation2: stringConcatenation2,
  endWithScript: endWithScript,
  longestString: longestString,
  changeCase: changeCase,
  replaceCharacter2: replaceCharacter2,
  countVowels2: countVowels2,
  stringConcatenation: stringConcatenation,
  endWithScriptArrow: endWithScriptArrow,
  longestStringArrow: longestStringArrow,
  changeCaseArrow: changeCaseArrow
};