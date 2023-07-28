const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const throttle = require('lodash.throttle');

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(textContent, 500));

function textContent(evt) {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

window.addEventListener('load', () => {
  const formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (formData) {
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
});
