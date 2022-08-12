// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const buttonStart = document.querySelector('[data-start]');
// const refs = {
//   days: document.querySelector('span[data-days]'),
//   hours: document.querySelector('span[data-hours]'),
//   minutes: document.querySelector('span[data-minutes]'),
//   seconds: document.querySelector('span[data-seconds]'),
// };
// let selectData = null;
// let intervalId = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     selectData = selectedDates[0].getTime();

//     if (selectData < new Date()) {
//       Notify.failure('Please choose a date in the future');
//       buttonStart.disabled = true;
//       return;
//     }
//     buttonStart.disabled = false;
//   },
// };

// flatpickr('#datetime-picker', options);

// buttonStart.addEventListener('click', onButtonClick);
// buttonStart.disabled = true;

// function onButtonClick() {
//   let isActive = false;

//   if (isActive) {
//     return;
//   }
//   isActive = true;

//   intervalId = setInterval(() => {
//     const deltaTime = selectData - new Date().getTime();

//     if (deltaTime <= 0) {
//       clearInterval(intervalId);
//       isActive = false;
//       return;
//     }

//     const time = convertMs(deltaTime);
//     updateClockInfo(time);
//   }, 1000);
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function updateClockInfo({ days, hours, minutes, seconds }) {
//   refs.days.textContent = `${days}`;
//   refs.hours.textContent = `${hours}`;
//   refs.minutes.textContent = `${minutes}`;
//   refs.seconds.textContent = `${seconds}`;
// }

// -------------------

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

formEl.addEventListener('submit', onButtenClick);

function onButtenClick(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  let delayEl = Number(delay.value);
  const stepEl = Number(step.value);
  const amounEl = Number(amount.value);

  for (let i = 1; i <= amounEl; i += 1) {
    createPromise(i, delayEl)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delayEl += stepEl;
  }
}

// bhbhbbhhbhh
