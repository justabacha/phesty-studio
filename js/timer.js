let timer;
let timeLeft = 25 * 60;
let isRunning = false;

export function toggleTimer() {
    const btn = document.getElementById('timer-btn');
    if (isRunning) {
        clearInterval(timer);
        btn.innerText = "START FOCUS";
    } else {
        timer = setInterval(updateTimer, 1000);
        btn.innerText = "PAUSE";
    }
    isRunning = !isRunning;
}

function updateTimer() {
    const display = document.getElementById('timer-display');
    let m = Math.floor(timeLeft / 60);
    let s = timeLeft % 60;
    display.innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert("Safe, focus done!");
    }
    timeLeft--;
}
