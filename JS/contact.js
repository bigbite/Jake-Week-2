// form input variables
const userName = document.querySelector('#user-name');
const userEmail = document.querySelector('#user-email');
const userMessage = document.querySelector('#user-message');
const userCheckbox = document.querySelector('#user-checkbox');
const userSubmit = document.querySelector('#submit-btn');

// add event listeners for change on each input element
userName.addEventListener('input', validateForm);
userEmail.addEventListener('input', validateForm);
userMessage.addEventListener('input', validateForm);
userCheckbox.addEventListener('input', validateForm);

// input subheading
const userNameSubH = document.querySelector('#name-input-subheading');
const userEmailSubH = document.querySelector('#email-input-subheading');
const userMessageSubH = document.querySelector('#msg-input-subheading');
const userCheckboxSubH = document.querySelector('#checkbox-subheading');

// form validation

function validateForm(e) {
  let formValid = true;
  userSubmit.disabled = true;

  userNameSubH.classList.remove('invalid-answer');
  userEmailSubH.classList.remove('invalid-answer');
  userMessageSubH.classList.remove('invalid-answer');
  userCheckboxSubH.classList.remove('invalid-answer');

  if (userName.value.length < 5) {
    formValid = false;
    userNameSubH.classList.add('invalid-answer');
  }

  if (userEmail.value.length > 255) {
    formValid = false;
    userEmailSubH.classList.add('invalid-answer');
  }

  if (
    (userMessage.value.length < 50 && userMessage.value.length !== 0) ||
    userMessage.value.length > 500
  ) {
    formValid = false;
    userMessageSubH.classList.add('invalid-answer');
  }

  if (userCheckbox.checked === false) {
    formValid = false;
    userCheckboxSubH.classList.add('invalid-answer');
  }

  if (formValid) {
    userSubmit.disabled = false;
  }
}
