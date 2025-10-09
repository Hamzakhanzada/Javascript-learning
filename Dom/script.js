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


// let cr = document.createElement("li");

// cr.textContent = "mango";

// document.querySelector("ul").append(cr)

 
// let img = document.createElement("img")
// img.setAttribute("src","https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary-1200x675.webp")

// let div = document.createElement("div")
// document.body.prepend(div)
// div.prepend(img)

// let li = document.querySelectorAll("ul li:nth-child(2n)")
// // ul.remove()

// li.forEach((cur) => {
//     cur.classList.add("highlight")

// })

// li.classList.add("highlight")

// 📝 Task 1: Text Replace

// Ek HTML page banao jisme:

// Ek <h1> heading ho likha ho “Hello DOM”

// JavaScript mein us heading ka text change karke “DOM Practice Start” kar do.

// 👉 Hint: Use getElementById ya querySelector + innerText.



let h1 = document.querySelector("#dom");

h1.textContent = "Dom Practice Start";

// Task 2: Multiple Paragraphs Style Change

// Page mein 3 <p> tags daalo alag-alag text ke sath.

// JavaScript mein sab paragraphs ka text color blue aur font size 20px kar do.

// 👉 Hint: Use getElementsByTagName (loop lagana hoga).



let para = document.querySelectorAll("p");

para.forEach((p)=>{
p.style.color = "blue"
p.style.fontSize = "20px"

})

// 📝 Task 3: Class Select & Edit

// 2 div banao jinki class name box ho.

// JavaScript mein dono boxes ki background color ko lightgray aur border ko 2px solid black kar do.

// 👉 Hint: Use getElementsByClassName ya querySelectorAll.



let box = document.querySelectorAll(".box")

box.forEach((cur)=>{
cur.style.backgroundColor = "lightgray"
cur.style.border = "2px solid black"
})


// 📝 Task 4: Create & Add Element

// Ek empty <div id="container"></div> banao.

// JavaScript mein ek <p> element create karo, usmein kuch text daalo, aur phir container ke andar append karo.

// 👉 Hint: Use document.createElement, innerText, aur appendChild.

let p = document.createElement("p")
p.textContent = "HEllo How are you buddy"

let div =  document.querySelector("#container")

div.append(p)


// 📝 Task 5: Remove Element

// Page mein ek <ul> ho jisme 3 list items (<li>) ho.

// JavaScript mein 2nd list item ko remove kar do.

// 👉 Hint: Use removeChild ya .remove().

let ul = document.querySelector("ul li:nth-child(2n)");
ul.remove()
