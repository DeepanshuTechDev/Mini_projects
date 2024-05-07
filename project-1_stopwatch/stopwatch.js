const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const millisecondsDisplay = document.querySelector('.milliseconds');
const startBtn = document.querySelector('#Start');
const stopBtn = document.querySelector('#Stop');
const resetBtn = document.querySelector('#Reset');

let intervalId;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startTimer() {
intervalId = setInterval(() => {
    milliseconds++;
    if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    }
    if (seconds === 60) {
    seconds = 0;
    minutes++;
    }
    displayTime();
}, 10);
}

function stopTimer() {
clearInterval(intervalId);
}

function resetTimer() {
minutes = 0;
seconds = 0;
milliseconds = 0;
displayTime();
}

function displayTime() {
minutesDisplay.textContent = padZeroes(minutes);
secondsDisplay.textContent = padZeroes(seconds);
millisecondsDisplay.textContent = padZeroes(milliseconds);
}

function padZeroes(num) {
return num.toString().padStart(2, '0');
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);