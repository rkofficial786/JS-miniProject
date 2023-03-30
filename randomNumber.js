
const delayTime = 5000;


let countdown = delayTime / 1000;
const intervalId = setInterval(() => {
  console.log(`Generating random number in ${countdown} seconds...`);
  countdown--;
  if (countdown < 0) {
    clearInterval(intervalId);
  }
}, 1000);

setTimeout(() => {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Random number generated: ${randomNumber}`);
}, delayTime+2000);
