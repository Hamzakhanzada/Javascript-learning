// ALL VARIABLES AND DOC SELECTIONS

let addNote = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");

const stack = document.querySelector(".stack");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");

const form = document.querySelector("form");

const imageUrlInput = form.querySelector(
  "input[placeholder='https://example.com/photo.jpg']"
);
const fullNameInput = form.querySelector(
  "input[placeholder='Enter full name']"
);
const homeTownInput = form.querySelector(
  "input[placeholder='Enter home town']"
);
const purposeInput = form.querySelector(
  "input[placeholder='e.g., Quick appointment note']"
);

const categoryRadios = form.querySelectorAll("input[name='category']");
const submitButton = form.querySelector(".submit-btn");

// SAVE TO LOCAL STORAGE
function saveToLocalStorage(obj) {
  let oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  oldTasks.push(obj);
  localStorage.setItem("tasks", JSON.stringify(oldTasks));
}

// SHOW / HIDE FORM
addNote.addEventListener("click", function () {
  formContainer.style.display = "block";
});

closeForm.addEventListener("click", function () {
  formContainer.style.display = "none";
});

// FORM SUBMIT
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const imageUrl = imageUrlInput.value.trim();
  const fullName = fullNameInput.value.trim();
  const homeTown = homeTownInput.value.trim();
  const purpose = purposeInput.value.trim();

  let selected = false;
  categoryRadios.forEach(function (cat) {
    if (cat.checked) selected = cat.value;
  });

  if (!imageUrl || !fullName || !homeTown || !purpose || !selected) {
    alert("Please fill all fields correctly!");
    return;
  }

  saveToLocalStorage({
    imageUrl,
    fullName,
    homeTown,
    purpose,
    selected,
  });

  form.reset();
  formContainer.style.display = "none";
  showCards();
});

// SHOW CARDS
function showCards() {
  stack.innerHTML = "";
  let allTasks = JSON.parse(localStorage.getItem("tasks"));
  if (!allTasks || allTasks.length === 0) return;

  allTasks.forEach(function (task) {
    const card = document.createElement("div");
    card.classList.add("card");

    const avatar = document.createElement("img");
    avatar.src = task.imageUrl;
    avatar.alt = "profile";
    avatar.classList.add("avatar");
    card.appendChild(avatar);

    const name = document.createElement("h2");
    name.textContent = task.fullName;
    card.appendChild(name);

    const hometownInfo = document.createElement("div");
    hometownInfo.classList.add("info");
    hometownInfo.innerHTML = `<span>Home town</span><span>${task.homeTown}</span>`;
    card.appendChild(hometownInfo);

    const bookingsInfo = document.createElement("div");
    bookingsInfo.classList.add("info");
    bookingsInfo.innerHTML = `<span>Purpose</span><span>${task.purpose}</span>`;
    card.appendChild(bookingsInfo);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");
    buttonsDiv.innerHTML = ` <button class="call"><i class="ri-phone-line"></i> Call</button>
      <button class="msg">Message</button> `;
    card.appendChild(buttonsDiv);

    stack.appendChild(card);
  });

  updateStack();
}

// UPDATE STACK LAYOUT   
function updateStack() {
  const cards = document.querySelectorAll(".stack .card");

  cards.forEach((card, i) => {
    if (i < 3) {     
      card.style.zIndex = 3 - i;
      card.style.transform = `translateY(${i * 10}px) scale(${1 - i * 0.02})`;
      card.style.opacity = `${1 - i * 0.02}`;
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

upBtn.addEventListener("click", function () {
  let lastChild = stack.lastElementChild;
  if (lastChild) {
    stack.insertBefore(lastChild, stack.firstElementChild);
    updateStack();
  }
});

// MOVE STACK DOWN
downBtn.addEventListener("click", function () {
  const firstChild = stack.firstElementChild;
  if (firstChild) {
    stack.appendChild(firstChild);
    updateStack();
  } 
});

showCards();  
