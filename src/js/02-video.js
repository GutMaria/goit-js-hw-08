import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Спочатку підгружаємо час для відтворення з localStorage
let currentTime = localStorage.getItem('videoplayer-current-time');
console.log('Збережений час з localStorage: ', currentTime);

if (!currentTime) {
  console.log('Починаємо спочатку');
  player.setCurrentTime(0);
} else {
  player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(evt) {
  const seconds = evt.seconds;
  localStorage.setItem('videoplayer-current-time', seconds);
  console.log(evt.seconds);
}
