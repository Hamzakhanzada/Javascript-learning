// How to access element by id

// const abc = document.getElementById("abc");
// console.log(abc)

// How to access element by querySelector

// let h1 = document.querySelector("h1");
// h1.innerHTML = "<i>Hello KEsa Ho</>"
// console.log(h1);

// How to access attribute by setAttribute 

// let a = document.querySelector("a");
// a.setAttribute("href","https://www.google.com")
// a.setAttribute("target","_blank");
// a.removeAttribute("href")


// let img = document.querySelector("img");
// console.log(img.getAttribute("src"));

// How to create Element in the body using Js


// let h1 = document.createElement("h1");

// h1.innerText = "Hi ma bahar sa aya ho "

// document.querySelector("div").appendChild(h1)

// how to change Css using Js

// let h1 = document.querySelectorAll("h1");
// h1.classList.add('color')


// practice set 

// let btn = document.querySelectorAll(".btn-now");
// console.log(btn);

// let pageHeading = document.querySelector("#heading");
// pageHeading.textContent = "Welcome to the Sheriyans"

// let li = document.querySelectorAll("li");
// li.forEach((items)=>{
//     console.log(items.textContent)
// })

// let p = document.querySelector("p")
// p.innerHTML = "<b>Updated</b> by Js"


// let img = document.querySelector("img")
// console.log(img.getAttribute("src")
// )

// let a = document.querySelector("a").setAttribute("href","https://www.sheryians.com")



// let div = document.createElement("div");

// div.textContent = "title"
// let di =  document.body.append(div);

// div.setAttribute("title","Hello")


let cr = document.createElement("li");

cr.textContent = "mango";

document.querySelector("ul").append(cr)

 
let img = document.createElement("img")
img.setAttribute("src","https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary-1200x675.webp")

let div = document.createElement("div")
document.body.prepend(div)
div.prepend(img)

let li = document.querySelectorAll("ul li:nth-child(2n)")
// ul.remove()

li.forEach((cur) => {
    cur.classList.add("highlight")

})

li.classList.add("highlight")








