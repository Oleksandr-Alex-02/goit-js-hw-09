import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';
import Notiflix from 'notiflix';

const rest = {
  inputPole: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let interval = null;
let timeData = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // зброс лічильника і остановка таймера
  onOpen() {
    clearInterval(interval);
    rest.days.textContent = '00';
    rest.hours.textContent = '00';
    rest.minutes.textContent = '00';
    rest.seconds.textContent = '00';
  },
  // достаєм дату
  onClose(selectedDates) {
    timeData = selectedDates[0].getTime();
    //  провірка дата і disabled
    if (timeData < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      rest.startBtn.setAttribute('disabled', true);
      return;
    }
    rest.startBtn.removeAttribute('disabled');
  },
};

const dataInput = flatpickr(rest.inputPole, options);

rest.startBtn.addEventListener('click', startButton);
rest.startBtn.setAttribute('disabled', true);

function startButton() {
  interval = setInterval(() => {
    const deltaTime = getTimeData - new Date().getTime();

    if (deltaTime <= 0) {
      clearInterval(interval);
      return;
    }
    const time = convertMs(deltaTime);
    updateClockInfo(time);
  }, 1000);

  rest.startBtn.setAttribute('disabled', true);
}

function updateClockInfo({ days, hours, minutes, seconds }) {
  rest.days.textContent = `${days}`;
  rest.hours.textContent = `${hours}`;
  rest.minutes.textContent = `${minutes}`;
  rest.seconds.textContent = `${seconds}`;
}

function twoZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = twoZero(Math.floor(ms / day));
  const hours = twoZero(Math.floor((ms % day) / hour));
  const minutes = twoZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = twoZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
