import { Notify } from 'notiflix/build/notiflix-notify-aio';

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

const rest = {
  form: document.querySelector('.form'),
  button: document.querySelector('button'),
  // form: document.querySelector('.'),
  // form: document.querySelector('.'),
  // form: document.querySelector('.'),
};

rest.button.addEventListener('sabmit', sabmit);

function sabmit() {
  e.preventDefault();
  if (0) {
    Notify.failure('Please choose a date in the future');
  }
}

console.log(rest.button);
console.log(rest.form.delay);
console.log(rest.form.step);
console.log(rest.form.amount);
