
let inp = document.querySelector("#todo-inp")
let btn = document.querySelector("#add-btn")

inp.addEventListener("input",function (dets) {
    dets.target.value
})

btn.addEventListener("click",function () {
    let li = document.createElement("li");
    let ul = document.querySelector("#todos")
    
    ul.appendChild(li);
    li.textContent = inp.value    
})