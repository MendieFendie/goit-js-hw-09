const form = document.querySelector('.form');
const delay = document.querySelector('[name=delay]');
const step = document.querySelector('[name=step]');
const amount = document.querySelector('[name=amount]');
const button = document.querySelector('button');

form.addEventListener('input', see);
button.addEventListener('click', submit);

let delayValue = 12;
let stepValue = 12;
let amountValue = 12;

function see(event) {
  if (event.target.name === 'delay') {
    delayValue = event.target.value;
    delayValue = Number(delayValue);
  }
  if (event.target.name === 'step') {
    stepValue = event.target.value;
    stepValue = Number(stepValue);
  }
  if (event.target.name === 'amount') {
    amountValue = event.target.value;
    amountValue = Number(amountValue);
  }
}

function createPromise(position, delay, amount) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    let value = delay + amount;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function submit(event) {
  for (let position = 1; position <= amountValue; position += 1) {
    createPromise(position, delayValue, stepValue)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayValue += stepValue;
    if (position === 5) {
      form.reset();
    }
    event.preventDefault();
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
//  викликаємо функцію createPromise(position, delay).then().catch()
