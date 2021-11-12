// Helper Function to get Elements
const getElement = (selector, isList) => {
  const el = isList
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);

  if ((!isList && el) || (isList && !el.length < 1)) return el;
  throw new Error(`Please double Check Selector: ${selector}`);
};

let userName = getElement("#username"),
  email = getElement("#email"),
  password = getElement("#password"),
  submit = getElement("#submit"),
  form = getElement("#form"),
  successIcon = getElement(".success-icon", true),
  failureIcon = getElement(".failure-icon", true),
  errorMsg = getElement(".error", true);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(userName, 0, "Username must have some value");
  engine(email, 1, "email must have some value");
  engine(password, 2, "Password must have some value");
});

// Engine Function for Validation
let engine = (id, index, messgae) => {
  if (id.value.trim() === "") {
    errorMsg[index].innerHTML = messgae;
    failureIcon[index].style.opacity = 1;
    successIcon[index].style.opacity = 0;
    id.style.border = "2px solid red";
  } else {
    errorMsg[index].innerHTML = "";
    failureIcon[index].style.opacity = 0;
    successIcon[index].style.opacity = 1;
    id.style.border = "2px solid green";
  }
};

// https://www.youtube.com/playlist?list=PLFBirL3MAv2_1ASjvgPa3TVgJ2yQ09z31
