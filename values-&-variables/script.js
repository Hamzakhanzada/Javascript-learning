console.log("Hey Iam Hamza")
let _namehamza$ = "hamza"
console.log(_namehamza$)

const _name = "hamza";
const age = 19;
const city = "karachi";
console.log("Hey My name is : "+_name+" and my age is "+age+" and iam living in "+city)


// Data Types In Js

const string = "Character";
const number = 7;
const isLogged = true;
const largeNum = 98479523449759243n;
const empty = null;
let notDefined;

console.log(typeof string,typeof number,typeof isLogged,typeof largeNum,typeof empty, typeof notDefined,)

// how to convert a string to a number 
const myFavNum = "10";


console.log(typeof +myFavNum)
console.log(typeof Number(myFavNum))

const str = 10;
console.log(typeof String(str))

// explain the process of truthy and falsy values 

// truthy values 
// 1 true
// 2 any non-empty string "hello"
// 3 any non-zero number 34
// 4 Arrays and Object Even non-empty 


// falsy values

// 1 false
// 2 zero
// 3 "" an empty string
// 4 null 
// 5 undefined 
// 6 NaN

// not equal to works both value are not same then return true and both value are same then return false opposite to the equal to 

console.log(5 !== 4);
console.log(5<=5)

let x = 5;
let y = 10;

if (x > 0 || y < 0) {
    console.log("true");
} else {
    console.log("false");
}


let isOpen = false;

console.log(!isOpen);



let myAgeIs = 18
let drivingLincenseValid = false;

if (myAgeIs >= 18 && drivingLincenseValid) {
    console.log("Your are eligible for driving")
} else{
    console.log("You are not eligible ")
}