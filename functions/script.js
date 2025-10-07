function threeStudents(num1,num2) {
    return num1 + num2 
}

console.log(threeStudents(5,8))
console.log(threeStudents(1,8))
console.log(threeStudents(9,8))


function greet(name) {
    console.log(`Hello ${name} Welcome to the JS Course`)
}

greet("Hamza")
greet("Ali")
greet("Talha")

// function expersion

let result = function sum(a,b) {
    console.log(a+b)
    
}

result(5,5)

// Anonymous Function is a function is without a name 
let result1 = function(a,b) {
return a + b    
}

console.log(result1(5,50))

// iffe imediate invocked function

// (function (a,b) {
//     console.log(a+b);
// })(5,99);

const myName = (name)=> {
return `MY Name Is ${name}`
}
console.log(myName("Hamza"))


function calc(a,b,op) {
    switch (op) {
        case "+":console.log(a+b)
            break
        case "-":console.log(a-b)
            break
        case "*":console.log(a*b)
            break
        case "/":console.log(a/b)
            break
         
        default: console.log("Not Match")
            break;
    }
}


console.log(calc(5,6,'+'))
console.log(calc(5,5,'-'))
console.log(calc(5,5,'*'))
console.log(calc(5,5,'/'))

// Ek array ka example do aur batao ke usme se pehla element kaise access karte hain?

const students = ["Ali","Hamza","Talha"];

console.log(students[0])

// Function kya hota hai? Ek simple function likh kar dikhado jo 2 numbers ka sum return kare.

function sumOFTwo(a,b) {
    return a + b
}

console.log(sumOFTwo(7,9))

// Loop ka kya use hai? Ek example likh kar batao ke kaise loop se 1 se 5 tak number print karte hain.

for (let i = 1; i <= 5; i++) {
console.log(i)    
}