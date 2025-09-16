let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let isRunning = false;

const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const millisecondsEl = document.getElementById('milliseconds');
const lapsEl = document.getElementById('laps');

document.getElementById('start').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTime, 10);
  }
});

document.getElementById('pause').addEventListener('click', () => {
  isRunning = false;
  clearInterval(timer);
});

document.getElementById('reset').addEventListener('click', () => {
  isRunning = false;
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
  lapsEl.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
  if (isRunning) {
    const lapTime = `${format(minutes)}:${format(seconds)}:${format(milliseconds)}`;
    const li = document.createElement('li');
    li.textContent = `Lap: ${lapTime}`;
    lapsEl.appendChild(li);
  }
});

function updateTime() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  updateDisplay();
}

function updateDisplay() {
  minutesEl.textContent = format(minutes);
  secondsEl.textContent = format(seconds);
  millisecondsEl.textContent = format(milliseconds);
}

function format(num) {
  return num < 10 ? `0${num}` : num;
}
