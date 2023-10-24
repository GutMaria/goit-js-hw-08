
import Player from "@vimeo/player";
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Спочатку підгружаємо час для відтворення з localStorage
loadCurrentTime();
player.on('timeupdate', throttle(saveCurrentTime, 1000) );
    

function saveCurrentTime(evt) {

    const seconds = evt.seconds;
    localStorage.setItem('videoplayer-current-time', seconds);
    console.log(evt.seconds);
    
}


function loadCurrentTime() {
    try {
        const secondForLoad = localStorage.getItem('videoplayer-current-time');
        player.setCurrentTime(secondForLoad);
        console.log(secondForLoad);
        } catch (error) {
            player.setCurrentTime(0);
    }
}


