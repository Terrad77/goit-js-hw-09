'use strict';
import debounce from 'debounce';
// import validator from 'validator';

// var validate = require('validator');
// validate.isEmail('foo@bar.com');
// validate.normalizeEmail(email[, options]);
// validate.ltrim(input[, chars]);
// validate.rtrim(input[, chars]);

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
});

textarea.addEventListener(
  'input',
  debounce(event => {
    const message = event.target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, message);
  }, 1000)
);
