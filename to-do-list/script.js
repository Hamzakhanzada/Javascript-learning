
// let inp = document.querySelector("#todo-inp")
// let btn = document.querySelector("#add-btn")

// inp.addEventListener("input",function (dets) {
//     dets.target.value
// })

// btn.addEventListener("click",function () {
//     let li = document.createElement("li");
//     let ul = document.querySelector("#todos")
    
//     ul.appendChild(li);
//     li.textContent = inp.value    
// })



function outer() {
    let name = "Hamza";

function inner()  { 
    let age = 19
    console.log(`Hey I am ${name} ${age} years old`)
    
}
inner()
}

outer()