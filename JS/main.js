
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const timerBox = document.querySelector('.timer__box');
const preLoader = document.querySelector('.lds-hourglass');

function updateTimer() {
  const weddingDay = new Date(`September 08 2023 00:00:00`);
  const currentDay = new Date();
  const timer = weddingDay - currentDay;

  const daysTimer = Math.floor(timer / 1000 / 60 / 60 / 24);
  const hoursTimer = Math.floor(timer / 1000 / 60 / 60) % 24;
  const minutesTimer = Math.floor(timer / 1000 / 60) % 60;
  const secondsTimer = Math.floor(timer / 1000) % 60;

  days.innerText = daysTimer < 10 ? '0' + daysTimer : daysTimer;
  hours.innerText = hoursTimer < 10 ? '0' + hoursTimer : hoursTimer;
  minutes.innerText = minutesTimer < 10 ? '0' + minutesTimer : minutesTimer;
  seconds.innerText = secondsTimer < 10 ? '0' + secondsTimer : secondsTimer;
}

setInterval(updateTimer, 1000);

setTimeout(function () {
  preLoader.remove();
  timerBox.style.display = 'flex';
}, 1000)

const swiper = new Swiper('.swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

