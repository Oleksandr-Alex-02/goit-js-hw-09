import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '300px',
  position: 'right-top',
  distance: '10px',
  opacity: 1,
  borderRadius: '50px',
  timeout: 5000,
});

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

function start(delay, step, amount) {
  let position = 0;
  for (let i = 0; i < amount; i += 1) {
    position += 1;
    createPromise(position, delay)
      .then(resolve => {
        Notiflix.Notify.success(resolve);
      })
      .catch(reject => {
        Notiflix.Notify.failure(reject);
      });
    delay = Number(delay) + Number(step);
  }
}

form.addEventListener('submit', submitBtn);

function submitBtn(e) {
  e.preventDefault();
  const delay = form.delay.value;
  const step = form.step.value;
  const amount = form.amount.value;
  start(delay, step, amount);
}
