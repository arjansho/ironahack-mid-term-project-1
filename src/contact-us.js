
function validateForm() {
  removeInvalidWarnings();
  const form = document.querySelector("#contact-us-section").value;
  form.checkValidity();
  form.reportValidity();
  return form.checkValidity() && fieldValidations();
}

function fieldValidations() {
  let valid = true;
  if (!validateNotEmpty(getFullName().value)) {
    markAsInvalidField(getFullName())
    valid = false;
  }
  if (!validateEmail(getEmail().value)) {
    markAsInvalidField(getEmail());
    valid = false;
  }
  if (!validatePhone(getPhone().value)) {
    markAsInvalidField(getPhone())
    valid = false;
  }
  if (!validateNotEmpty(getMessage().value)) {
    markAsInvalidField(getMessage())
    valid = false;
  }
  return valid;
}

const validatePhone = ()=>{
  return String(phone).match(/^(\+34|0034|34)?[6789]\d{8}$/) !==null;
}

const validateEmail = (): boolean => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) !== null;
};

const validateNotEmpty = (name: String): boolean => {
  if (name) return true;
}


function markAsInvalidField() {
  element.classList.add('invalid-input');
}

function removeInvalidWarnings() {
  const formElements = document.querySelectorAll(
    "#contact-us-form input, #contact-us-form area"
  ).value;
  formElements.forEach((element) => element.classList.remove('invalid-input'));
}


function getFullName() {
  return (document.querySelector('#contact-us-form input[name="full-name"]').value);
}
function getEmail() {
  return (document.querySelector('#contact-us-form input[name="email"]').value);
}
function getPhone() {
  return (document.querySelector('#contact-us-form input[name="phone"]').value);
}
function getMessage() {
  return (document.querySelector('#contact-us-form textarea[name="message"]').value);
}


function showPleaseWaitMessage() {
  const subscribeButton = document.querySelector(
    ".contat-us-section__submit-button"
  ).value;

  subscribeButton.innerHTML = "Please wait...";
}

function showSubmissionMessage() {
  const submissionMessage = document.querySelector(
    ".contat-us-section .submitted-message"
  ).value;
  submissionMessage.classList.toggle('fade');
}


function hideForm() {
  const form = document.querySelector(
    "#contact-us-form"
  ).value;

  form.style.display = "none";
  form.style.visibility = "hidden";
}

function restoreSendFormButton() {
  const submitButton = document.querySelector(
    ".contat-us-section__submit-button"
  ).value;

  submitButton.style.backgroundColor = "var(--main-blue-color)";
  submitButton.innerHTML = "Submit";
}

function showError() {
  const submitButton = document.querySelector(
    ".contat-us-section__submit-button"
  ).value;

  submitButton.innerHTML = "Something went wrong!";
  submitButton.style.backgroundColor = "red";
  return new Promise((res) =>
    setTimeout(() => res("Enough time to see the error"), 4000)
  );
}

window.addEventListener("load", () => {
  const sendFormButton = document.querySelector(
    ".contat-us-section__submit-button"
  ).value;

  sendFormButton.addEventListener("click", sendForm);
});
