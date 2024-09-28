// Mobile Nav code
let mobileNav = document.querySelector(".mobile-nav");
let bars = document.querySelector(".bars");
let mobilelinks = document.querySelector(".mobile-header-links");
bars.onclick = function () {
  mobileNav.classList.toggle("active");
  mobilelinks.classList.toggle("show");
};

// Password code
const lengthInput = document.getElementById("length");
const rangeInput = document.getElementById("range");
const passwordInput = document.getElementById("password");

function randomPass(length) {
  let password = "";
  let characters = "~!@#$%^&*()_+-=[]{}/.>,<;:\"'";
  let numbers = "1234567890";
  let smallalphabets = "acdefghijklmnopqrstuvwxyz";
  let capitalalphabets = smallalphabets.toUpperCase();

  let firstOption = document.getElementById("first-option");
  let secondOption = document.getElementById("second-option");
  let thirdOption = document.getElementById("third-option");
  let uppercaseCheckbox = document.getElementById("uppercase");
  let lowercaseCheckbox = document.getElementById("lowercase");
  let numberCheckbox = document.getElementById("numbers");
  let symbolsCheckbox = document.getElementById("symbols");

  let charArr = Array.from(characters);
  let numArr = Array.from(numbers);
  let smallalphabetsArr = Array.from(smallalphabets);
  let capitalalphabetsArr = Array.from(capitalalphabets);
  let array = numArr.concat(charArr, smallalphabetsArr, capitalalphabetsArr);

  firstOption.addEventListener("click", function () {
    symbolsCheckbox.setAttribute("disabled", "");
    numberCheckbox.removeAttribute("disabled");
  });

  secondOption.addEventListener("click", function () {
    numberCheckbox.setAttribute("disabled", "");
    symbolsCheckbox.setAttribute("disabled", "");
  });
  thirdOption.addEventListener("click", function () {
    numberCheckbox.removeAttribute("disabled");
    symbolsCheckbox.removeAttribute("disabled");
  });

  // numberCheckbox.removeAttribute("disabled", "");

  for (let index = 0; index < length; index++) {
    password += array[Math.floor(Math.random() * array.length)];
  }

  passwordInput.value = password;
}

// Copy function code
function copyFunction() {
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(passwordInput.value);
}

// SyncInputs code
const syncInputs = (value) => {
  lengthInput.value = value;
  rangeInput.value = value;
  randomPass(value);
};

lengthInput.addEventListener("input", (event) => {
  syncInputs(event.target.value);
});

rangeInput.addEventListener("input", (event) => {
  syncInputs(event.target.value);
});

passwordInput.addEventListener("input", (event) => {
  const newLength = event.target.value.length;
  if (newLength >= 1 && newLength <= 50) {
    lengthInput.value = newLength;
    rangeInput.value = newLength;
  }
});

// Regenerate new password code
document
  .getElementById("generate-new-password-icon")
  .addEventListener("click", () => {
    randomPass(lengthInput.value);
  });

// Initialize password generation
randomPass(lengthInput.value);
