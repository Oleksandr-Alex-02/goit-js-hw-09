const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', colorRandom);
stopBtn.addEventListener('click', colorRandomStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let a = null;

function colorRandom() {
  a = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
}

function colorRandomStop() {
  clearInterval(a);
  startBtn.removeAttribute('disabled');
}
