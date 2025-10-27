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

    erase() {
      document.querySelectorAll("h1").forEach((ele)=>{
        if (ele.style.color === this.color) {
          ele.remove();
        }
      })
    }

}

let bis1 = new CreateBiscuit("Super","black",20,"peaksfirens");
let bis2 = new CreateBiscuit("Oreo","red",30,"oreoista");


class User  {
  constructor (name,address,username,email,) {
    this.name = name
    this.address = address
    this.username = username
    this.email = email
    this.role = "user"
  }
  checkRole () {
    console.log(`You are ${this.role}`)
  }
  write (text) {
   let h1 = document.createElement("h1");
   h1.textContent = `${this.name} ${text}`
   document.body.appendChild(h1)
  }
}

class Admin extends User {
  constructor (name,address,username,email,) {
    super(name,address,username,email,)
    this.role = "Admin"

  }
  remove () {
    document.querySelectorAll("h1").forEach((ele)=>{
      ele.remove();
    })
  }
}

let user1 = new User("Ali","tharushah","ali123","Ali@gmail.com",);
let user2 = new User("Talha","sideArea","talha8","talha@gmail.com",);

let A1 = new Admin("Hamza","Karachi","hamza7","hamza@gmail.com")

