// Functions 1 Interactive Lecture

// Converting to a Boolean --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that number is not 0, it will console.log as true

const myFaveNum = 6;
const myNumBoo = Boolean(myFaveNum);
//console.log(myNumBoo)  

// create a string variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that string is not a set of empty quotes, it will console.log as true

const myString = '';
const myStringBoo = Boolean(myString)
//console.log(myStringBoo)

// Converting to a Number --------------------------------------------------------------------

// create a boolean variable, on the next line convert that variable to a number with the Number method (assign it to another variable)
// if you set the variable to "true", it will console.log as 1
// if you set the variable to "false", it will console.log as 0

const iLoveCats = true;
let catsNum = Number(iLoveCats);
//console.log(catsNum)

// create a variable equal to a string of numbers, on the next line convert that string into a number using the Number method shorthand (assign it to another variable)
// console.log both variables and they should be different colors in the terminal since one is a number and the

let numString = '1234';
let convertedString = +numString;
//console.log(numString, convertedString)

// shorthand number conversion can be done all in one line
// set a variable equal to a string with the shorthand operator in front of it, console.log it and the result will be the same as the other two versions
let inOneLine = +'1234';
//console.log(inOneLine)

// set a string variable equal to your height in inches (should look like this '75in')
// convert that string into a number with the Number method and the parseInt method (assigning both to new variables)
// when you console.log the variables, one will succeed and one will fail
let myHeight = '62in'
let withNum = Number(myHeight);
let withParse = parseInt(myHeight);
//console.log(withNum)
//console.log(withParse)

// Converting to a String --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a string with the String method (assign it to another variable)
// when you console.log the 2 variables, they should be different colors
let myAge = 24;
let ageToString = String(myAge)
//console.log(myAge, ageToString)

// create another variable but this time use concatenation of empty quotes to turn your number into a string

let ageToString2 = myAge + '';
//console.log(ageToString2)

// create a boolean variable (to either true or false, your choice)
// create another variable equal to a string (saying whatever you want) and concatenate the boolean variable to it
// if you console.log it, the boolean will now be a string
const lovesPokemon = true;
let doYouLovepkmn = 'So I love pokemon? That is ' + lovesPokemon
//console.log(doYouLovepkmn)

// String Methods --------------------------------------------------------------------

// create a string variable and use the string methods listed below to see if your string includes, starts with, and ends with the letter(s) you input as parameters
//const myName =  'bryton'

// .includes()
//console.log(myName.includes('ry'))

// .startsWith()
//console.log(myName.startsWith('t'))

// .endsWith()
//console.log(myName.endsWith('n'))

// Trimming Whitespace --------------------------------------------------------------------

// set a variable equal to a string with extra spaces at the beginning and end of the words in your string
// use .trim() on the string and assign it to another variable to remove the extra spaces

const lotsOSpaces = '  wow so roomy in here  '
let noMoreSpaces = lotsOSpaces.trim();
//console.log(noMoreSpaces)

// Changing Casing --------------------------------------------------------------------

// set a variable "lowercase" equal to a string with all the letters being in lowercase
// try to use toUpperCase() on "lowercase" without reassigning it (this will fail)
// do the same except reassign "lowercase" to be lowercase.toUpperCase() (this will be successful)
let lowercase = 'these are my letters and i love them';
lowercase.toUpperCase();
//console.log(lowercase)

lowercase = lowercase.toUpperCase()
//console.log(lowercase)
// Replacing Characters --------------------------------------------------------------------

// make a variable that is equal to a string saying whatever you want
// use .replace() to replace the first letter of your choosing from the string
// use .replaceAll() to replace every letter of your choosing from the string
let myFaveVine = 'Road work ahead? uh yeah, i sure hope it does!';

let noFirstA = myFaveVine.replace('a', 'j');
//console.log(noFirstA)

let aIsAllGone = myFaveVine.replace('a', 'j')
//console.log(aIsAllGone)

// Splitting Strings --------------------------------------------------------------------

// make a string variable saying whatever you want
// split the string with .split(' '), .split(','), and .split('')
// console.log them to see the difference
let sentence = 'Four smart fellows, they felt smart'

let splitSpace = sentence.split(' ');
let splitComma = sentence.split(',');
let splitEmpty = sentence.split('');

//console.log(splitSpace)
//console.log(splitComma)
//console.log(splitEmpty)


// Joinging Strings --------------------------------------------------------------------

// make an array variable containing a few different strings
// join the array with .join(), .join(''), .join(' '), .join(' + ')
// console.log them to see the difference
const tmnt = ['leonardo', 'rafael', 'michaelangelo', 'donatello']

let joinNothing = tmnt.join();
let joinEmpty = tmnt.join('');
let joinSpace = tmnt.join(' ');
let joinPlus = tmnt.join(' + ')

//console.log(joinNothing)
//console.log(joinEmpty)
//console.log(joinSpace)
//console.log(joinPlus)


// Functions --------------------------------------------------------------------

// create functions with no params, 1 param, and 2 params
// then show the difference between a return value vs just console logging something in the function
function noParams(){
    //console.log(`This is a function.`)
}

function oneParams(word){
   // console.log(`The word I chose is ${word}.`)
}

function twoParams(num1, num2){
    //console.log(num1 + num2)
}

//noParams()
//oneParams('erctabundant')
//twoParams(6,3)

function hasReturn(num1, num2){
    return num1 + num2
}
//console.log(hasReturn(6,3))

// Scope --------------------------------------------------------------------

// show outer scope vs a function's inner scope by setting variables inside and outside of a function
// console.log both variables, one of them is going to give an error
let outerVar = " I'm in the outer scope!";

function scopeTester(){
    let innerVar = "I'm in the scope of the function"
   // console.log(outerVar, innerVar)
}
//scopeTester()

// Syntaxes --------------------------------------------------------------------

// show an example of each of the 3 function types doing the same block of code
//declaration
function rooter(num){
    return Math.sqrt(num)
}

//exprssion
const rooter2 = function(num){
    return Math.sqrt(num)
}

//arrow
const rooter3 = num => {
    return Math.sqrt(num)
}

//console,log(rooter(36))
//console.log(rooter2(25))
//console.log(reooter3(9))




// then show an arrow function with implicit return as well

const implicit = word => `This arrow ${word} return`
console.log(implicit('implicit'))





