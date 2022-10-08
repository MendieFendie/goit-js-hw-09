const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');
const buttons = document.querySelector('.buttons');

buttons.style.position = 'absolute';
buttons.style.top = '50%';
buttons.style.left = '44%';
startBtn.style.textTransform = 'uppercase';
stoptBtn.style.textTransform = 'uppercase';
startBtn.style.fontSize = '25px';
stoptBtn.style.fontSize = '25px';
startBtn.style.padding = '25px';
stoptBtn.style.padding = '25px';
startBtn.style.marginRight = '10px';

startBtn.classList.add('btn');
stoptBtn.classList.add('btn');

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
