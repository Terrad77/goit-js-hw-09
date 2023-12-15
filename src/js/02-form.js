'use strict';
// import debounce from 'debounce';

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   console.log(LOCAL_STORAGE_KEY);
//   localStorage.removeItem(LOCAL_STORAGE_KEY);
//   form.reset();
// });

// form.addEventListener(
//   'input',
//   debounce(event => {
//     const message = event.target.value;
//     localStorage.setItem(LOCAL_STORAGE_KEY, message);
//   }, 1000)
// );

// запис даних у localStorage
const saveToLocalStorage = () => {
  const email = input.value.trim();
  const message = textarea.value.trim();

  if (email || message) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ email, message }));
  } else {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }
};

// Перевірка наявності збережених даних у localStorage
const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
input.value = savedData.email || '';
textarea.value = savedData.message || '';

// Обробка події input для форми
form.addEventListener('input', event => {
  const elementType = event.target.nodeName.toLowerCase();
  if (elementType === 'input' || elementType === 'textarea') {
    saveToLocalStorage();
  }
});

// Обробка події submit для форми
form.addEventListener('submit', event => {
  event.preventDefault();

  const email = input.value.trim();
  const message = textarea.value.trim();

  if (email && message) {
    console.log({ email, message });

    // Очистка localStorage та полів форми
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    form.reset();
  }
});
