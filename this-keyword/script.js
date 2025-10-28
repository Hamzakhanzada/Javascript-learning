// this ki word ki value or nature badal jati ha 

console.log(this);

function abc() {
    console.log(this)
}
abc();

// method 

let obj = {
    name:"hamza",
    sayName : function () {
        console.log(this)
    }
}

obj.sayName();


// Event handler 

// let h1 = document.querySelector("h1")
// h1.addEventListener("click",function () {
//     console.log(this.style.color = "blue");
// })


let obj1 = {
    name:"Talha",
    age: 20,

}

function abc() {
    console.log(this.name)
}

abc.call(obj1)