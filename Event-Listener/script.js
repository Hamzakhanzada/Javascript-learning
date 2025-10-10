// let p = document.querySelector("p")

// p.addEventListener("dblclick",function () {
//     p.style.color = "green"
// })

// let btn = document.querySelector(".btn")

// btn.addEventListener("click",function() {
//  btn.setAttribute("disabled","true")
 
// })

// let inp = document.querySelector("input")

// inp.addEventListener("input",function (dets) {
// if (dets.data !== null) {
//     console.log(dets.data)
// }    
// })

// change event tab chalta ha jab  koi input select ya textarea ma koi change ho jai 

// let sel = document.querySelector("select");
// let selCar = document.querySelector("#selectcar");

// sel.addEventListener("change",function (dets) {
//     selCar.textContent = `${dets.target.value} has selected`
//     if (dets.target.value === "bmw") {
//         selCar.style.color = "blue"
//     } else if (dets.target.value === "civic") {
//         selCar.style.color = "red"
//     }
//     else if (dets.target.value === "porshe") {
//         selCar.style.color = "green"
//     }
//     else if (dets.target.value === "corolla") {
//         selCar.style.color = "orange"
//     }
    
// })

let h1 = document.querySelector("h1")

window.addEventListener("keydown",function (dets) { 
    if (dets.key === " ") {
    h1.textContent = "SPC"
    } else {
    h1.textContent = `${dets.key}`

    }
    // console.log(dets)
})