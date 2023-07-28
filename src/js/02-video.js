import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(playerTime, 1000));

function playerTime(data) {
  const currentTime = data.seconds;
  localStorage.setItem(LOCALSTORAGE_KEY, currentTime);
}

const time = localStorage.getItem(LOCALSTORAGE_KEY);

player
  .setCurrentTime(time)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
