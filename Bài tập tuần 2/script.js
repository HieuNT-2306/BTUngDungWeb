const form = document.getElementById("mainform");

const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const moblieEmailInput = document.getElementById("mobile-email");
const passwordInput = document.getElementById("password");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const customRadio = document.getElementById("custom");
const maleRadio = document.getElementById("male");
const femaleRadio = document.getElementById("female");


const firstNameChatbox = document.getElementById("firstname-chatbox");
const lastNameChatbox = document.getElementById("lastname-chatbox");
const mobileEmailChatbox = document.getElementById("mobile-email-chatbox");
const passwordChatbox = document.getElementById("password-chatbox");
const dobChatbox = document.getElementById("dob-chatbox");
const pronounChatbox = document.getElementById("pronoun-chatbox");

const firstNameCheck = document.getElementById("firstname-check");
const lastNameCheck = document.getElementById("lastname-check");
const mobileEmailCheck = document.getElementById("mobile-email-check");
const passwordCheck = document.getElementById("password-check");

const pronounSelect = document.getElementById("pronoun");
const pronounNote = document.querySelector(".note.opt-gender"); 
const optionalGenderInput = document.getElementById("optional-gender");


function toggleCustomSection() {
  if (customRadio.checked) {
    pronounSelect.classList.remove("hide");
    pronounNote.classList.remove("hide");
    optionalGenderInput.parentElement.classList.remove("hide"); 
  } else {
    pronounSelect.classList.add("hide");
    pronounNote.classList.add("hide");
    optionalGenderInput.parentElement.classList.add("hide"); 
  }
}
customRadio.addEventListener("click", toggleCustomSection);
maleRadio.addEventListener("click", toggleCustomSection);
femaleRadio.addEventListener("click", toggleCustomSection);

console.log("hello");


function validateMobileEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d+$/; // For basic number validation (adjust for specific regions)

  return emailRegex.test(value) || phoneRegex.test(value);
}

function validatePassword(value) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[A-Za-z\d]{8,}$/;
  return passwordRegex.test(value);
}
function validateDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getDate() === parseInt(day) &&
    date.getMonth() === parseInt(month) - 1 &&
    date.getFullYear() === parseInt(year)
  );
}

function validateForm() {
  // Reset styles before validation (maintain for form submission logic)
  firstNameInput.classList.remove("alert");
  lastNameInput.classList.remove("alert");
  moblieEmailInput.classList.remove("alert");
  passwordInput.classList.remove("alert");
  dayInput.classList.remove("alert");
  monthInput.classList.remove("alert");
  yearInput.classList.remove("alert");
  pronounSelect.classList.remove("alert");

  const isEmptyFirstName = firstNameInput.value.trim() === "";
  const isEmptyLastName = lastNameInput.value.trim() === "";
  const isValidMobileEmail = !validateMobileEmail(moblieEmailInput.value.trim());
  const isValidPassword = !validatePassword(passwordInput.value.trim());
  const isValidDate = !validateDate(dayInput.value, monthInput.value, yearInput.value);
  const isCustom = customRadio.checked;
  const isSelectPronoun = (pronounSelect.value.trim() === "");
  const isOptionalGender = (optionalGenderInput.value.trim() === "");
  const isCustomGender = (isCustom && (isSelectPronoun && isOptionalGender));


  // Update classes based on emptiness (maintain for form submission)
  if (isEmptyFirstName) {
    firstNameInput.classList.add("alert");
    firstNameChatbox.classList.remove("hide");
    firstNameCheck.classList.remove("hide");
  }

  if (isEmptyLastName) {
    lastNameInput.classList.add("alert");
    lastNameChatbox.classList.remove("hide");
    lastNameCheck.classList.remove("hide");
  }
  if (isValidMobileEmail) {
    moblieEmailInput.classList.add("alert");
    mobileEmailChatbox.classList.remove("hide");
    mobileEmailCheck.classList.remove("hide");
  }
  if (isValidPassword) {
    passwordInput.classList.add("alert");
    passwordChatbox.classList.remove("hide");
    passwordCheck.classList.remove("hide");
  }
  if (isValidDate) {
    dayInput.classList.add("alert");
    monthInput.classList.add("alert");
    yearInput.classList.add("alert");
    dobChatbox.classList.remove("hide");
  }
  if (isCustomGender) {
    pronounSelect.classList.add("alert");
    pronounChatbox.classList.remove("hide");
  }
  event.preventDefault();
  if (!isEmptyFirstName && !isEmptyLastName && !isValidMobileEmail && !isValidPassword && !isValidDate && !isCustomGender) {
     alert("Form submitted successfully!");
    return true;
  }
}

form.addEventListener("submit", validateForm);

// Update classes on input for both inputs
firstNameInput.addEventListener("input", () => {
  firstNameInput.classList.toggle("alert", firstNameInput.value.trim() === "");
  firstNameChatbox.classList.toggle("hide", firstNameInput.value.trim() !== "");
  firstNameCheck.classList.toggle("hide", firstNameInput.value.trim() !== "");
});

lastNameInput.addEventListener("input", () => {
  lastNameInput.classList.toggle("alert", lastNameInput.value.trim() === "");
  lastNameChatbox.classList.toggle("hide", lastNameInput.value.trim() !== "");
  lastNameCheck.classList.toggle("hide", lastNameInput.value.trim() !== "");
});

moblieEmailInput.addEventListener("input", () => {
  moblieEmailInput.classList.toggle(
    "alert",
    !validateMobileEmail(moblieEmailInput.value.trim())
  );
  mobileEmailChatbox.classList.toggle(
    "hide",
    validateMobileEmail(moblieEmailInput.value.trim())
  );
  mobileEmailCheck.classList.toggle(
    "hide",
    validateMobileEmail(moblieEmailInput.value.trim())
  );
});

passwordInput.addEventListener("input", () => {
  passwordInput.classList.toggle(
    "alert",
    !validatePassword(passwordInput.value.trim())
  );
  passwordChatbox.classList.toggle(
    "hide",
    validatePassword(passwordInput.value.trim())
  );
  passwordCheck.classList.toggle(
    "hide",
    validatePassword(passwordInput.value.trim())
  );
});

dayInput.addEventListener("input", () => {
  dayInput.classList.remove("alert");
  monthInput.classList.remove("alert");
  yearInput.classList.remove("alert");
  dobChatbox.classList.add("hide");
});

monthInput.addEventListener("input", () => {
  dayInput.classList.remove("alert");
  monthInput.classList.remove("alert");
  yearInput.classList.remove("alert");
  dobChatbox.classList.add("hide");
});

yearInput.addEventListener("input", () => {
  dayInput.classList.remove("alert");
  monthInput.classList.remove("alert");
  yearInput.classList.remove("alert");
  dobChatbox.classList.add("hide");
});

pronounSelect.addEventListener("input", () => {
  pronounSelect.classList.remove("alert");
  pronounChatbox.classList.add("hide");
});

optionalGenderInput.addEventListener("input", () => {
  pronounSelect.classList.remove("alert");
  pronounChatbox.classList.add("hide");
});