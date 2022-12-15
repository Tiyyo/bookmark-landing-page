// console.log(isValidEmail); //true
"use-strict";
const formNewsletter = document.getElementById("signup-newsletter");
const inputEmailNewsletter = document.getElementById("newsletter");
const emailRegex = new RegExp(
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  "gm"
);
const errorUi = document.getElementsByClassName("errors")[0];
const arrows = document.querySelectorAll(".arrow");
const accordionSection = document.querySelectorAll(".accordion--section");
const tabLinks = document.querySelectorAll(".features__nav__link");
const pageTab = document.querySelectorAll(".feature");
const hamburgerBtn = document.getElementsByClassName("hamburger")[0];
const navMobile = document.getElementsByClassName("navlinks__mobile")[0];
const navbarLogo = document.getElementsByClassName("navbar__logo")[0];

console.log(accordionSection);

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

const displayAnswerFaq = (arrow) => {
  let questionId = arrow.dataset.arrowNumber;
  for (let i = 0; i < accordionSection.length; i++) {
    if (accordionSection[i].dataset.questionId === questionId) {
      accordionSection[i].toggleAttribute("data-display-answer");
      const isActive = accordionSection[i].hasAttribute("data-display-answer");
      if (isActive === true) {
        accordionSection[i].dataset.displayAnswer = "active";
      }
    }
  }
};

const displayFeatures = (event) => {
  let namePage = event.target.className.split(" ")[1];

  for (let i = 0; i < tabLinks.length; i++) {
    if (tabLinks[i].className.includes(namePage)) {
      tabLinks[i].setAttribute("data-active", "true");
    } else {
      tabLinks[i].removeAttribute("data-active");
    }
  }

  pageTab.forEach((page) => {
    if (page.dataset.namePage === namePage) {
      page.setAttribute("data-active", "true");
    } else {
      page.removeAttribute("data-active");
    }
  });
};

hamburgerBtn.addEventListener("click", (e) => {
  hamburgerBtn.classList.toggle("is-active");

  if (navMobile.dataset.mobileNav === "active") {
    navMobile.removeAttribute("data-mobile-nav");
  } else {
    navMobile.setAttribute("data-mobile-nav", "active");
  }
  if (navbarLogo.dataset.mobileNav === "active") {
    navbarLogo.removeAttribute("data-mobile-nav");
  } else {
    navbarLogo.setAttribute("data-mobile-nav", "active");
  }
});

formNewsletter.addEventListener("submit", (e) => {
  e.preventDefault();
  emailValidation();
  inputEmailNewsletter.value = "";
});

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    displayAnswerFaq(arrow);
  });
});

accordionSection.forEach((section) => {
  section.addEventListener("click", () => {});
});

tabLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    displayFeatures(e);
  });
});
