const signin = document.querySelector("#signin");
const signInForm = document.querySelector("#signin__form");
const signOutButton = document.querySelector("#signout__btn");
const welcome = document.querySelector(".welcome");
const userId = document.querySelector("#user_id");

function authorize(id) {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  signOutButton.style.display = "block";
  userId.textContent = id;
}

if (localStorage.getItem("user_id")) {
  authorize(localStorage.getItem("user_id"));
}

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(e.target);
  xhr.responseType = "json";

  xhr.addEventListener("load", (e) => {
    if (e.target.response.success) {
      localStorage.setItem("user_id", e.target.response.user_id);
      
      authorize(e.target.response.user_id);
    } else {
      alert("Неверный логин/пароль");
    }
  });

  xhr.open("POST", 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.send(formData);

  e.target.reset();
});

signOutButton.addEventListener("click", ()=> {
  signin.classList.add("signin_active");
  welcome.classList.remove("welcome_active");
  localStorage.removeItem("user_id");
})
 
