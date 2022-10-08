const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');

startBtn.classList.add('btn');
stoptBtn.classList.add('btn');

const buttons = document.querySelectorAll('.btn');
let timerId = null;
stoptBtn.disabled = true;

startBtn.addEventListener('click', switchColor);
stoptBtn.addEventListener('click', stopSwithColor);

function switchColor() {
  startBtn.disabled = true;
  stoptBtn.disabled = false;
  timerId = setInterval(() => {
    randomColor();
  }, 1000);
}

function stopSwithColor() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stoptBtn.disabled = true;
}

function randomColor() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  document.body.style.backgroundColor = getRandomHexColor();
}
