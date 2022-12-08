// console.log(isValidEmail); //true
"use-strict";
const formNewsletter = document.getElementById("signup-newsletter");
const inputEmailNewsletter = document.getElementById("newsletter");
const emailRegex = new RegExp(
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  "gm"
);
const errorUi = document.getElementsByClassName("errors")[0];

console.log(errorUi);

const emailValidation = () => {
  let emailToTest = inputEmailNewsletter.value;
  let errorEl = [errorUi, inputEmailNewsletter];
  const isValidEmail = emailRegex.test(emailToTest);
  console.log(isValidEmail);
  if (isValidEmail === false) {
    errorEl.forEach((el) => {
      el.setAttribute("data-error-state", "active");
    });
  } else {
    errorEl.forEach((el) => {
      el.removeAttribute("data-error-state");
    });
    alert("You have signed up ;)");
  }
};

formNewsletter.addEventListener("submit", (e) => {
  e.preventDefault();
  emailValidation();
  inputEmailNewsletter.value = "";
});
