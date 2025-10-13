let form = document.querySelector("form")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

form.addEventListener("submit",function (dets) {
    dets.preventDefault();
        document.querySelector("#emailError").textContent = ""
        document.querySelector("#passwordError").textContent = ""

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const emailCheck =  emailRegex.test(email.value);
    const passwordCheck = passwordRegex.test(password.value);
    
    let isValid = true;

if (!emailCheck) {
    document.querySelector("#emailError").textContent = "Please enter a valid email address"
    document.querySelector(".error").style.display = "initial"
    isValid = false

} 

if (!passwordCheck) {
    document.querySelector("#passwordError").textContent = "Password must be at least 8 characters."
    document.querySelector(".errors").style.display = "initial"
    isValid = false
}

if (isValid) {
    document.querySelector(".show-message").textContent = "Everything is fine"
}
})