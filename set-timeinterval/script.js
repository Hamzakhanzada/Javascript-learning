// it runs one time
let ct = setTimeout(function () {
    console.log("HEllo")
},3000)
clearTimeout(ct)
// it runs continously
let ci =  setInterval(function () {
    console.log("hi")
},5000)
clearInterval(ci)

// let count = 10;
// let interval = setInterval(function () {
//     if (count >= 0) {
//         console.log(count)
//         count--
//     } else {
//         clearInterval(interval);
//     }
// },1000)
// let count = 0;
// let sec = 5;
// let progress = document.querySelector(".progress-bar")
// let percent = document.querySelector(".percent")
//  let int = setInterval(function () {
//     if (count < 100) {
//         count++
//         progress.style.width = `${count}%`
//         percent.textContent = `${count}%`
//     } else {
//         document.querySelector(".title").textContent = "Downloaded."
//         clearInterval(int)
//     }
// },(sec *1000) / 100)

let banner = document.querySelector(".banner")

setTimeout(function () {
    banner.style.display = "none"
},3000)