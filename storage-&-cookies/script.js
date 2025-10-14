// Local Storage =  ap ka browser ka andar data store karna jo ki browser band hona per bhi delete nahi hoga

// Session Storage = Yeh ap ka data temporarily store karta ha mtlb ki tab band howa data gaya 

// Cookies = yeh bhi data store karta ha and ap ka data browser ki cookies name property ma save hota ha
// end yeh cookie concept light data yeh kam data ka liya hota ha

// localStorage.setItem("name","Hamza");
let storage = localStorage.getItem("name") 
console.log(storage)

localStorage.removeItem("name")