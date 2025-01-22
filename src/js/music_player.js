let now_playing = document.querySelector(".itemNumber");
let track_art = document.querySelector(".trackArt");
let track_name = document.querySelector(".trackName");
let track_artist = document.querySelector(".trackArtist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

let track_list = [
{
    name: "Ikiru Hitobito",
    artist: "MOB CHOIR/sajou no hana",
    image: "src/img/album_covers/ikiru_hitobito.png",
    path: "src/audio/bgm/Ikiru%20Hitobito.mp3"
},
{
    name: "cobalt",
    artist: "Mob Choir",
    image: "src/img/album_covers/mobchoir1.png",
    path: "src/audio/bgm/cobalt.mp3"
},
{
    name: "gray",
    artist: "sajou no hana",
    image: "src/img/album_covers/MemosepiaandGray.png",
    path: "src/audio/bgm/gray.mp3"
},
{
    name: "Shout Baby",
    artist: "Ryokuoushoku Shakai",
    image: "src/img/album_covers/shoutbby.png",
    path: "src/audio/bgm/Shout%20Baby.mp3"
},
{
    name: "PINK BLOOD",
    artist: "Hikaru Utada",
    image: "src/img/album_covers/pink_blood.png",
    path: "src/audio/bgm/PINK BLOOD.mp3"
},
{
    name: "Re:Re:",
    artist: "ASIAN KUNG-FU GENERATION",
    image: "src/img/album_covers/rere.png",
    path: "src/audio/bgm/Re:Re:.mp3"
},
{
    name: "To see the future",
    artist: "レン (CV:楠木ともり)",
    image: "src/img/album_covers/toseethefuture.png",
    path: "src/audio/bgm/To%20see%20the%20future.mp3"
},
{
    name: "Another Colony",
    artist: "TRUE",
    image: "src/img/album_covers/Anakoro.png",
    path: "src/audio/bgm/Another%20colony.mp3"
},
{
    name: "My Friend",
    artist: "mewhan",
    image: "src/img/album_covers/ぼくのフレンド.png",
    path: "src/audio/bgm/ぼくのフレンド.mp3"
},
{
    name: "Greedy Greedy - English ver.",
    artist: "KUROMI",
    image: "src/img/album_covers/greedy_greedy_kuromi.png",
    path: "src/audio/bgm/Greedy%20Greedy%20-%20English ver..mp3"
},
];

let track_index = Math.floor(Math.random() * track_list.length);

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();
    curr_track.autoplay = false;
    curr_track.src = track_list[track_index].path;
    curr_track.load();

    track_art.src = track_list[track_index].image;
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

    updateTimer = setInterval(seekUpdate, 1000);
    curr_track.addEventListener("ended", nextTrack);
}

function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function playpauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '▶️';
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '⏸️';
}

function nextTrack() {
    if (track_index < track_list.length - 1)
        track_index += 1;
    else track_index = 0;
    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    if (track_index > 0)
        track_index -= 1;
    else track_index = track_list.length;
    loadTrack(track_index);
    playTrack();
}

function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);

        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

loadTrack(track_index);