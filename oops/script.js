
function CreatePencil(name,price,color,) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.write = function (text) {
    let h1 = document.createElement("h1");
        h1.textContent = text
        h1.style.color = color
        document.body.appendChild(h1);
    }
}

let pencil1 =  new CreatePencil("Dux",20,"black");
let pencil2 =  new CreatePencil("Dollar",30,"red");