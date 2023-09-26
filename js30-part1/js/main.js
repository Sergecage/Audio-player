const song = document.querySelector("#song");
const play = document.querySelector('.play');
const container = document.querySelector('.container');
const player = document.querySelector('.player');
const progress = document.querySelector('.progress');
const durationTime = document.querySelector('.duration');
const current = document.querySelector('.current');
const prev = document.querySelector('.prev-track');
const next = document.querySelector('.next-track');
const songName = document.querySelector('.artist-song');
const songArtist = document.querySelector('.artist-name');
const songImage = document.querySelector('.image-player');
const backImage = document.querySelector('.background');
const speedUp = document.querySelector('.speedUp');
const songs = ['beyonce', 'dontstartnow', 'Journey - Don`t Stop Believin', 'Beethoven', 'Lowrider', 'Light of Darkness - The Death '];
const images =['lemonade','dontstartnow', 'journey', 'beethoven', 'Lowrider', 'LoD'];
const artists = ['Beyonce', 'Dua Lipa', 'Journey' , 'Beethoven', 'War', 'Light of Darkness'];
const names = ['Don`t hurt yourself', 'Don`t start now', "Don't stop believing" , 'Beethoven', 'Lowrider', 'Death'];
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
    if (songNum > songs.length -1) {
        songNum = 0;
    }
    songLine(songs[songNum], images[songNum], artists[songNum], names[songNum]);
    song.play();
    play.src = "images/icons/pause.png"
};

next.addEventListener('click', nextSong);

const prevSong = () => {
    songNum--;
    if (songNum < 0) {
        songNum = songs.length -1;
    }
    songLine(songs[songNum], images[songNum], artists[songNum], names[songNum]);
    song.play();
    play.src = "images/icons/pause.png"
};
prev.addEventListener('click', prevSong);

//display duration and current time 
const displayTimer = (e) => {
    const { duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    current.innerHTML = `${String(Math.floor(song.currentTime / 60)).padStart(2, "0")}:${String(
        Math.floor(song.currentTime % 60)
      ).padStart(2, "0")}`;
    durationTime.innerHTML = `${String(Math.floor(song.duration / 60)).padStart(2, "0")}:${String(
        Math.floor(song.duration % 60)
      ).padStart(2, "0")}`
}

song.addEventListener('timeupdate', displayTimer);

//rewind function
const rewind = (e) => {
    const progressWidth = this.clientWidth;
    const point = e.offsetX;
    const songTime = song.duration;
    song.currentTime = (point / progressWidth ) * songTime;
};
progress.addEventListener('click', rewind);

//Autoplay
song.addEventListener('ended', nextSong);

//speedUp 
const increaseSpeed = () => {
    song.playbackRate = 1.5;
};

speedUp.addEventListener('click', increaseSpeed);