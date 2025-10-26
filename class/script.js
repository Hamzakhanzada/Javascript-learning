class CreateBiscuit  {
    constructor (name,color,price,company) {
        this.name = name
        this.color = color
        this.price = price
        this.company = company

    }
    write (text) {
      let h1 =  document.createElement("h1")
      h1.textContent = text;
      h1.style.color = this.color
      document.body.appendChild(h1);
    }

}

let bis1 = new CreateBiscuit("Super","black",20,"peaksfirens");
let bis2 = new CreateBiscuit("Oreo","red",30,"oreoista");

