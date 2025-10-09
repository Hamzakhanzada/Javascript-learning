let p = document.querySelector("p")

p.addEventListener("dblclick",function () {
    p.style.color = "green"
})

let btn = document.querySelector(".btn")

btn.addEventListener("click",function() {
 btn.setAttribute("disabled","true")
 
})
