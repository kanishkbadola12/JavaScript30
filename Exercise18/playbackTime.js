const listItems = document.querySelectorAll('li');
let totalSeconds = 0;

const totalTime = listItems.forEach(item => {
    const [minute, second] = item.dataset.time.split(':');

    totalSeconds += (parseInt(minute) * 60) + parseInt(second);
});

const hours = Math.floor(totalSeconds / 3600);

totalSeconds = totalSeconds % 3600;
const minutes = Math.floor(totalSeconds / 60);

const seconds = totalSeconds % 60;

const timeEle = document.getElementById('time');
timeEle.textContent = `Total time: ${hours}:${minutes}:${seconds}`;

