let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return console.log('Ding!');
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  let remainderSeconds = seconds % 60;
  if (remainderSeconds < 10) {
    remainderSeconds = `0${remainderSeconds}`
  }
  const display = `${minutes}:${remainderSeconds}`;
  timerDisplay.textContent = display;
}
