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