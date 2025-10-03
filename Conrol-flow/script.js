let user;
let citizen = false;
let isRegister = true;

const userPromt = prompt(user)
if (userPromt >= 18 && citizen && isRegister) {
    console.log("you are eligible for vote")
} else if (userPromt >=18 && citizen && isRegister) {
    console.log("They are not eligible vote")
} else if (userPromt >= 18 && citizen) {
    console.log("you are not eligible due to citizenship ")
} else if (userPromt >= 18 && isRegister) {
    console.log("you are not eligble due to register")
} else {
    console.log("Conditon not match ")
}