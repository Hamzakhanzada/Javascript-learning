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

// let h1 = document.querySelector("h1")

// window.addEventListener("keydown",function (dets) { 
//     if (dets.key === " ") {
//     h1.textContent = "SPC"
//     } else {
//     h1.textContent = `${dets.key}`

//     }
//     // console.log(dets)
// })
// let btn = document.querySelector(".btn")
// let file = document.querySelector("#fileinp");

// btn.addEventListener("click",function () {
//     file.click()
// })

// file.addEventListener("change",function (dets) {
//     const file = dets.target.files[0]
//     if (file) {
//     btn.textContent = file.name
//     }
// })


let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit",function (dets) {
    dets.preventDefault();
    // console.log(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value)
    let card = document.createElement("div");
    card.classList("card");

    let profile = document.createElement("div");
    profile.classList("profile-pic");

    card.appendChild(profile);

    let img = document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1757105388973-3b3e58a4b5ee?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    
    card.appendChild(img)
})