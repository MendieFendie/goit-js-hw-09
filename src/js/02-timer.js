const startBtn = document.querySelector('[data-start]');
const dayValue = document.querySelector('[data-days]');
const hourValue = document.querySelector('[data-hours]');
const minutValue = document.querySelector('[data-minutes]');
const secondValue = document.querySelector('[data-seconds]');

const timer = document.querySelector('.timer');
const field = document.querySelectorAll('.field');
const numberValue = document.querySelectorAll('.value');
console.log(numberValue);
timer.style.display = 'flex';
field[0].style.display = 'flex';
numberValue[0].style.fontSize = '37px';
field[0].style.flexDirection = 'column';
field[0].style.alignItems = 'center';
field[0].style.marginRight = '10px';

field[1].style.display = 'flex';
numberValue[1].style.fontSize = '37px';
field[1].style.flexDirection = 'column';
field[1].style.alignItems = 'center';
field[1].style.marginRight = '10px';

field[2].style.display = 'flex';
numberValue[2].style.fontSize = '37px';
field[2].style.flexDirection = 'column';
field[2].style.alignItems = 'center';
field[2].style.marginRight = '10px';

field[3].style.display = 'flex';
numberValue[3].style.fontSize = '37px';
field[3].style.flexDirection = 'column';
field[3].style.alignItems = 'center';

startBtn.addEventListener(`click`, onClick);
startBtn.disabled = true;
const currentDate = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const deltaTime = currentDate - selectedDates[0];
    if (deltaTime >= 0) {
      window.alert('Please choose a date in the future');
    } else startBtn.disabled = false;
  },
  onChange(selectedDates) {
    pickedTime = selectedDates[0];
    console.log(pickedTime);
  },
};
flatpickr('#datetime-picker', options);
let pickedTime = '';
let leftTime = null;

function onClick(evt) {
  let date = new Date();
  date = date.getTime();

  let timeLeft = pickedTime.getTime() - date;

  let timerId = setInterval(() => {
    timeLeft = timeLeft - 1000;
    leftTime = convertMs(timeLeft);
    inputTime();
    startBtn.disabled = true;

    if (timeLeft <= 999) {
      clearInterval(timerId);
    }
  }, 1000);
}

function inputTime() {
  dayValue.textContent = leftTime.days;
  dayValue.textContent = leftTime.days;
  hourValue.textContent = leftTime.hours;
  minutValue.textContent = leftTime.minutes;
  secondValue.textContent = leftTime.seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
