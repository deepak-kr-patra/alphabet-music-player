let music = document.getElementById("audio");
let musicPrevious;

const run = (e) => {
    console.log(e);
    musicPrevious = music;
    if (e.key == "a" || e.key == "A") {
        music.src = "music-folder/Aa Toh Sahi.mp3";
    }
    else if (e.key == "b" || e.key == "B") {
        music.src = "music-folder/Brown Rang.mp3";
    }
    else if (e.key == "c" || e.key == "C") {
        music.src = "music-folder/Chudi Jo Khanke.mp3";
    }
    else if (e.key == "d" || e.key == "D") {
        music.src = "music-folder/Dekha Ek Khwab.mp3";
    }
    else if (e.key == "e" || e.key == "E") {
        music.src = "music-folder/Ek Mulaqat.mp3";
    }
    else if (e.key == "f" || e.key == "F") {
        music.src = "music-folder/Filhall.mp3";
    }
    else if (e.key == "g" || e.key == "G") {
        music.src = "music-folder/Ghungroo.mp3";
    }
    else if (e.key == "h" || e.key == "H") {
        music.src = "music-folder/Hawayein.mp3";
    }
    else if (e.key == "i" || e.key == "I") {
        music.src = "music-folder/Ik Vaari Aa.mp3";
    }
    else if (e.key == "j" || e.key == "J") {
        music.src = "music-folder/Jab Tak.mp3";
    }
    else if (e.key == "k" || e.key == "K") {
        music.src = "music-folder/Khairiyat.mp3";
    }
    else if (e.key == "l" || e.key == "L") {
        music.src = "music-folder/Let Me Love You.mp3";
    }
    else if (e.key == "m" || e.key == "M") {
        music.src = "music-folder/Mere Samne Wali Khidki.mp3";
    }
    else if (e.key == "n" || e.key == "N") {
        music.src = "music-folder/Na Na Na Na.mp3";
    }
    else if (e.key == "o" || e.key == "O") {
        music.src = "music-folder/O Saathi.mp3";
    }
    else if (e.key == "p" || e.key == "P") {
        music.src = "music-folder/Pani Da Rang.mp3";
    }
    else if (e.key == "q" || e.key == "Q") {
        music.src = "music-folder/Quarter Past Midnight.mp3";
    }
    else if (e.key == "r" || e.key == "R") {
        music.src = "music-folder/Raaz Aankhein Teri.mp3";
    }
    else if (e.key == "s" || e.key == "S") {
        music.src = "music-folder/Sanu Ek Pal Chain.mp3";
    }
    else if (e.key == "t" || e.key == "T") {
        music.src = "music-folder/Tera Hone Laga Hoon.mp3";
    }
    else if (e.key == "u" || e.key == "U") {
        music.src = "music-folder/Udi Udi Jaye.mp3";
    }
    else if (e.key == "v" || e.key == "V") {
        music.src = "music-folder/Vacation.mp3";
    }
    else if (e.key == "w" || e.key == "W") {
        music.src = "music-folder/Wajah Tum Ho.mp3";
    }
    else if (e.key == "x" || e.key == "X") {
        music.src = "music-folder/XStatic.mp3";
    }
    else if (e.key == "y" || e.key == "Y") {
        music.src = "music-folder/Yaar Ni Milya.mp3";
    }
    else if (e.key == "z" || e.key == "Z") {
        music.src = "music-folder/Zara Zara Behekta Hai.mp3";
    }
    else if (e.key == " ") {
        if (music.paused) {
            if (music.src.length > 0) {
                playAudio();
            }
        } else {
            pauseAudio();
        }
        return;
    }
    else if (e.key == "ArrowLeft") {
        music.currentTime -= 5;
        return;
    }
    else if (e.key == "ArrowRight") {
        music.currentTime += 5;
        return;
    }
    else if (e.key == "ArrowUp") {
        music.volume += 0.1;
        return;
    }
    else if (e.key == "ArrowDown") {
        music.volume -= 0.1;
        return;
    }
    else {
        return;
    }
    stopPrevious();
    playAudio();
}

document.addEventListener("keydown", run);

const playAudio = () => {

    // Show loading animation.
    var playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Automatic playback started!
            // Show playing UI.
            console.log("resolved");
        })
            .catch(error => {
                // Auto-play was prevented
                // Show paused UI.
                console.log(error);
            });
    }
};

const pauseAudio = () => {
    music.pause();
};

const stopPrevious = () => {
    musicPrevious.pause();
    musicPrevious.currentTime = 0;
};

var player = document.getElementById("musicbar");
toggle();

function toggle() {
    if (music.paused) {
        player.classList.add("paused");
    } else {
        player.classList.remove("paused");
    }
}


music.onplay = function () {
    // console.log("playing");
    let musicSrc = music.src;
    let songname = musicSrc.substring(35, musicSrc.length-4);
    songname = songname.split("%20").join(" ");
    player.setAttribute('song-name', "Playing: " + songname);
    toggle();
};
music.onpause = function () {
    // console.log("paused");
    let musicSrc = music.src;
    let songname = musicSrc.substring(35, musicSrc.length-4);
    songname = songname.split("%20").join(" ");
    player.setAttribute('paused-song-name', "Paused: " + songname);
    toggle();
};