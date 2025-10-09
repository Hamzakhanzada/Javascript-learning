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

let sel = document.querySelector("select");
let selCar = document.querySelector("#selectcar");

sel.addEventListener("change",function (dets) {
    selCar.textContent = `${dets.target.value} has selected`
    
})