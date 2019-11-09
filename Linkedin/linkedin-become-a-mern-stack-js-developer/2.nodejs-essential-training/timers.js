const WAIT_TIMER = 5000;
const WAIT_INTERVAL = 500;
let current_time = 0;

const incTime = () => {
  current_time += WAIT_INTERVAL;
  const PERSENTAGE = Math.floor((current_time / WAIT_TIMER) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${PERSENTAGE}%`);
};

const timerFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`done`);
};
console.log(`setting a ${WAIT_TIMER / 1000} seconds delay`);
const interval = setInterval(incTime, WAIT_INTERVAL);
setTimeout(timerFinished, WAIT_TIMER);
