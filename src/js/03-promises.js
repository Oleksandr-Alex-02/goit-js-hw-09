import Notify from 'notiflix/build/notiflix-notify-aio';

const rest = {
  form: document.querySelector('.form'),
  button: document.querySelector('button'),
};

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

function position(delay, step, amount) {
  for (let i = 0; i < amount; i += 1) {
    position += 1;
    createPromise(position, delay)
      .then(resolve => {
        console.log(resolve);
      })
      .catch(reject => {
        console.log(reject);
      });
  }
}
