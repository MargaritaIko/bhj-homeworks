const signin = document.getElementById("signin");
const signinForm = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const signinBtn = document.getElementById("signin__btn");

signin.classList.add("signin_active");

let xhr = new XMLHttpRequest();

signinBtn.addEventListener("click", function() {
  xhr.preventDefault();
  const formData = new FormData(signinForm);

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.send(formData);

  xhr.onreadystatechange = function() {
    if (this.readyState == xhr.DONE && this.status == 200) {
      const json = JSON.parse(xhr.responseText);

      if (json.success) {
        localStorage.userId = json.user_id;
        signin.classList.remove("signin_active");
        welcome.classList.add("welcome_active");
        welcome.innerHTML = `Добро пожаловать, пользователь #<span>${json.user_id}</span>`;
      } else {
        alert("Неверные логин/пароль");
      }
    }
  };
});