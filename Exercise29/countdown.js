let timer;

const getTime = (timeInMilliSec) => {
  const seconds = (timeInMilliSec / 1000) % 60;
  const minutes = Math.floor(timeInMilliSec / 1000 / 60);

  return [minutes, seconds];
};

const displayTime = (unit1, unit2, id) => {
  const time = `${unit1}:${unit2 < 10 ? "0" : ""}${unit2}`;
  const ele = document.querySelector(id);
  ele.textContent = time;
};

const startCountdown = (timeInSec) => {
  if (timer) {
    clearInterval(timer);
  }

  let timeInMilliSec = timeInSec * 1000;

  const [minutes, seconds] = getTime(timeInMilliSec);
  displayTime(minutes, seconds, ".display__time-left");

  timer = setInterval(() => {
    if (timeInMilliSec <= 0) {
      clearInterval(timer);
      return;
    }

    timeInMilliSec = timeInMilliSec - 1000;

    const [minutes, seconds] = getTime(timeInMilliSec);
    displayTime(minutes, seconds, ".display__time-left");
  }, 1000);
};

const setEndTime = (timeInSec) => {
  const now = Date.now();
  const date = new Date();

  const timeInMilliSec = timeInSec * 1000;
  const then = now + timeInMilliSec;

  let [minutes, seconds] = getTime(then - now);
  let hours = date.getHours();

  if (date.getSeconds + seconds > 60) {
    minutes++;
  }

  minutes = date.getMinutes() + minutes;
  hours = minutes >= 60 ? hours + 1 : hours;

  displayTime(hours, minutes % 60, ".display__end-time");
};

const init = () => {
  const tabs = document.querySelectorAll("[data-time]");
  tabs.forEach((tab) =>
    tab.addEventListener("click", function () {
      const { time } = this.dataset;
      setEndTime(time);
      startCountdown(time);
    })
  );
};

init();
