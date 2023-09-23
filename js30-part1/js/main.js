const song = document.querySelector("#song");
const play = document.querySelector('.play');
const container = document.querySelector('.container');
const player = document.querySelector('.player');
const progress = document.querySelector('.progress');
const duration = document.querySelector('.duration');
const current = document.querySelector('.current');
const prev = document.querySelector('.prev-track');
const next = document.querySelector('.next-track');
const songName = document.querySelector('.artist-song');
const songArtist = document.querySelector('.artist-name');
const songImage = document.querySelector('.image-player');
const backImage = document.querySelector('.background');
const songs = ['beyonce', 'dontstartnow', 'Journey - Don`t stop believing', 'Beethoven'];
const images =['lemonade','dontstartnow', 'journey', 'beethoven'];
const artists = ['Beyonce', 'Dua Lipa', 'Journey' , 'beethoven'];
const names = ['Don`t hurt yourself', 'Don`t start now', 'Don`t stop believing' , 'Beethoven'];
let songNum = 0;
let playing = true;

const songLine = (e, pic, title, name) => {
    songArtist.innerHTML = title;
    songName.innerHTML = name;
    song.src = `music/${e}.mp3`;
    songImage.src = `images/pictures/${pic}.png`;
    backImage.src =`images/pictures/${pic}.png`;
}

songLine(songs[songNum], images[songNum], artists[songNum], names[songNum]);

//Play or pause music
play.addEventListener('click', () => {
    song.classList.add('play')
    if (playing){
        song.play();
        play.src = "images/icons/pause.png";
        playing = false;
    } else {
       song.pause();
       song.classList.remove('play');
       play.src = "images/icons/play.png"; 
       playing = true;
    }
})

//select the song
const nextSong = () => {
    songNum++;

    if (songLine > songs.length -1) {
        songLine = 0;
    }
    songLine(songs[songNum], images[songNum], artists[songNum], names[songNum]);
    song.play();
}

next.addEventListener('click', nextSong)
//display duration and current time 
const displayTimer = () => {
    const { durationTime, currentTime} = song;
    progress.max = durationTime;
    progress.value = currentTime;
    current.textContent = timer(current);
    if (! durationTime) {
        duration.textContent = `0:00`;
    } else {
        duration.textContent = timer(durationTime);
    }
}

const timer = (count) => {
    const minutes = Math.floor( count / 60);
    const seconds = Math.floor( count - minutes * 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

progress.addEventListener("timeupdate", () => {
    song.currentTime = this.value;
})

displayTimer();

const interval = this.setInterval(() => {
    displayTimer();
}, 500);
/*song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.min = song.current;
}

*/