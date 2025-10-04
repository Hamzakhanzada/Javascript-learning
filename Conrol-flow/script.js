// let user;
// let citizen = false;
// let isRegister = true;

// const userPromt = prompt(user)
// if (userPromt >= 18 && citizen && isRegister) {
//     console.log("you are eligible for vote")
// } else if (userPromt >=18 && citizen && isRegister) {
//     console.log("They are not eligible vote")
// } else if (userPromt >= 18 && citizen) {
//     console.log("you are not eligible due to citizenship ")
// } else if (userPromt >= 18 && isRegister) {
//     console.log("you are not eligble due to register")
// } else {
//     console.log("Conditon not match ")
// }

let num = 6;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

if (num === 6) {
  console.log("positive");
} else if (num === -6) {
  console.log("negative");
} else {
  console.log("Zero");
}

let day = "sunday";

switch (day) {
  case "monday":
    console.log("Todya is Monday");

    break;
  case "tuesday":
    console.log("Todya is tuesday");

    break;

  default:console.log("day not match");
    break;
}


let num1 = 1;

while (num1 <= 10) {
  console.log(`5*${num1} = ${num1 * 5}`);
  num1++
}

let total = 0
for (let i = 1; i <= 10; i++) {
 total = total + i
}
console.log(total)

for (let i = 1; i <=5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern = pattern + "*"
  }
  console.log(pattern)
}