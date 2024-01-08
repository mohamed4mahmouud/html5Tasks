let video = document.querySelector(".vid");
let playButton = document.querySelector(".btn-play");
let pauseButton = document.querySelector(".btn-pause");
let muteButton = document.querySelector(".btn-mute");
let progress = document.querySelector(".pro");
let speedRange = document.querySelector(".range");
let volumeRange = document.querySelector(".volume-range");
let toFirtButton = document.querySelector(".to-first");
let toEndButton = document.querySelector(".to-end");
let fullscreenButton = document.querySelector(".btn-fullscreen");
let currentTimeDisplay = document.getElementById("current-time");
let durationDisplay = document.getElementById("duration");
let toNextButton = document.querySelector(".next");
let toPrevButton = document.querySelector(".prev");

let index = 0;
let videos = ["videos/porche.mp4", "videos/Bmw.mp4", "videos/porche1.mp4"];

toPrevButton.addEventListener("click", () => {
  index = (index - 1 + videos.length) % videos.length;
  video.src = videos[index];
});

toNextButton.addEventListener("click", () => {
  index = (index + 1) % videos.length;
  video.src = videos[index];
});

video.addEventListener("loadedmetadata", () => {
  progress.max = video.duration;
  updateDurationDisplay();
});
video.addEventListener("timeupdate", () => {
  progress.value = video.currentTime;
  updateCurrentTimeDisplay();
});

function updateCurrentTimeDisplay() {
  let minutes = Math.floor(video.currentTime / 60);
  let seconds = Math.floor(video.currentTime % 60);
  currentTimeDisplay.textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function updateDurationDisplay() {
  let minutes = Math.floor(video.duration / 60);
  let seconds = Math.floor(video.duration % 60);
  durationDisplay.textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

speedRange.addEventListener("input", () => {
  let speed = parseFloat(speedRange.value);
  video.playbackRate = speed;
});

volumeRange.addEventListener("input", () => {
  let volume = parseFloat(volumeRange.value);
  video.volume = volume;
  video.muted = false;
});

muteButton.addEventListener("click", () => {
  video.muted = true;
  volumeRange.value = 0;
});

playButton.addEventListener("click", () => {
  video.play();
});

pauseButton.addEventListener("click", () => {
  video.pause();
});

toEndButton.addEventListener("click", () => {
  video.currentTime = video.duration;
});

toFirtButton.addEventListener("click", () => {
  video.currentTime = 0;
});

fullscreenButton.addEventListener("click", () => {
  video.requestFullscreen();
});
