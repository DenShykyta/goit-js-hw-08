import Player from '@vimeo/player';
import throttle from 'lodash.throttle'


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(playingTimeCheck, 1000));

function playingTimeCheck (evt) {
   localStorage.setItem("videoplayer-current-time", evt.seconds);
}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));