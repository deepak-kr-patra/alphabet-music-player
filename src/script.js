const path = require('path-browserify');

let music = document.getElementById("audio");
let musicPrevious;
let songname;

const run = (e) => {
    console.log(e);
    musicPrevious = music;
    if (e.key == "a" || e.key == "A") {
        music.src = "https://audio.jukehost.co.uk/Ie7inuE9gDVKh8itNwyNGKnbbxWbMLfJ";
        songname = "Aa Toh Sahi";
    }
    else if (e.key == "b" || e.key == "B") {
        music.src = "https://audio.jukehost.co.uk/J6dKenWIb99lWgEX2HxM8tcmxvjjWmHu";
        songname = "Brown Rang";
    }
    else if (e.key == "c" || e.key == "C") {
        music.src = "https://audio.jukehost.co.uk/s2V6UNUX92zvXBf28GPg1vOVCfkIupmP";
        songname = "Chudi Jo Khanke";
    }
    else if (e.key == "d" || e.key == "D") {
        music.src = "https://audio.jukehost.co.uk/qvhlLueWRhcu78ToFf64zmMYfloEnHJj";
        songname = "Dekha Ek Khwab";
    }
    else if (e.key == "e" || e.key == "E") {
        music.src = "https://audio.jukehost.co.uk/Y81MMl0kqTdZvbIt2Yc2n8kObZTxItGs";
        songname = "Ek Mulaqat";
    }
    else if (e.key == "f" || e.key == "F") {
        music.src = "../music-folder/.mp3";
        songname = "https://audio.jukehost.co.uk/FAclW2tb4WmtBnZX9c8N6mCk8HuQinOI";
    }
    else if (e.key == "g" || e.key == "G") {
        music.src = "https://audio.jukehost.co.uk/VYveym61ZXbVVYNzGlFkfVTK12D8Sxnj";
        songname = "Ghungroo";
    }
    else if (e.key == "h" || e.key == "H") {
        music.src = "https://audio.jukehost.co.uk/MHCapmXMEKQ3Vqw4y49EmwnG0agZLKB5";
        songname = "Hawayein";
    }
    else if (e.key == "i" || e.key == "I") {
        music.src = "https://audio.jukehost.co.uk/Zp4wJuEj0wyskIeVJ1cYN1jqat7zHnKK";
        songname = "Ik Vaari Aa";
    }
    else if (e.key == "j" || e.key == "J") {
        music.src = "https://audio.jukehost.co.uk/uuRPceKc6dzo8Vpam1SODiX1OWdiCReM";
        songname = "Jab Tak";
    }
    else if (e.key == "k" || e.key == "K") {
        music.src = "https://audio.jukehost.co.uk/B2bEUDyX43mphRcCbeagx850QfelGmV9";
        songname = "Khairiyat";
    }
    else if (e.key == "l" || e.key == "L") {
        music.src = "https://audio.jukehost.co.uk/FBfxTiI5HTnMlP4ZlNqNy4i5XI02wgFx";
        songname = "Let Me Love You";
    }
    else if (e.key == "m" || e.key == "M") {
        music.src = "https://audio.jukehost.co.uk/Bmke1iYNiqHwBH5VzdyQF3tVIjKq4uzs";
        songname = "Mere Samne Wali Khidki";
    }
    else if (e.key == "n" || e.key == "N") {
        music.src = "https://audio.jukehost.co.uk/4lLSTVIahngaagC0KGQzENBImQv8AeGF";
        songname = "Na Na Na Na";
    }
    else if (e.key == "o" || e.key == "O") {
        music.src = "https://audio.jukehost.co.uk/O6kz6TZVGytQuV7j913fqZVxNNFU2Pvf";
        songname = "O Saathi";
    }
    else if (e.key == "p" || e.key == "P") {
        music.src = "https://audio.jukehost.co.uk/BaPQgUh20krlmwsdZFYjY10J6adPxlfT";
        songname = "Pani Da Rang";
    }
    else if (e.key == "q" || e.key == "Q") {
        music.src = "https://audio.jukehost.co.uk/3W8v3XjvdgaC3nMzxfLOTilklEZgs9Sr";
        songname = "Quarter Past Midnight";
    }
    else if (e.key == "r" || e.key == "R") {
        music.src = "https://audio.jukehost.co.uk/avJtChJPfzguT7EZgZWccGtGzRn5j7sF";
        songname = "Raaz Aankhein Teri";
    }
    else if (e.key == "s" || e.key == "S") {
        music.src = "https://audio.jukehost.co.uk/xJp2pdkHHAUu9QmBHscZE5Ovsre6tKUx";
        songname = "Sanu Ek Pal Chain";
    }
    else if (e.key == "t" || e.key == "T") {
        music.src = "https://audio.jukehost.co.uk/oYI0Ab8Zj4uqC2eGD8dKHb3HlliAGZCT";
        songname = "Tera Hone Laga Hoon";
    }
    else if (e.key == "u" || e.key == "U") {
        music.src = "https://audio.jukehost.co.uk/jiEfV5HLM4urU076vSqYdo45KSfWazTM";
        songname = "Udi Udi Jaye";
    }
    else if (e.key == "v" || e.key == "V") {
        music.src = "https://audio.jukehost.co.uk/KgQa9yoJfKU6JqCRdcG7axzkjlaDt83e";
        songname = "Vacation";
    }
    else if (e.key == "w" || e.key == "W") {
        music.src = "https://audio.jukehost.co.uk/HcbxU1Os5lSVsfSZ1G7cuAh0uhDnU9QV";
        songname = "Wajah Tum Ho";
    }
    else if (e.key == "x" || e.key == "X") {
        music.src = "https://audio.jukehost.co.uk/94qfBNosWQRTeXGLnOcIWWkivtp9L84z";
        songname = "XStatic";
    }
    else if (e.key == "y" || e.key == "Y") {
        music.src = "https://audio.jukehost.co.uk/QRu0O0S46GyySAqNkB1EkZU0ZAfnFFrV";
        songname = "Yaar Ni Milya";
    }
    else if (e.key == "z" || e.key == "Z") {
        music.src = "https://audio.jukehost.co.uk/1ybyjkLiOSRAS5ZzO5Iyy9fKZ2b8twIZ";
        songname = "Zara Zara Behekta Hai";
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
        if (music.volume >= 1) {
            console.log("already full volume: ", music.volume);
            return;
        }
        music.volume += 0.1;
        return;
    }
    else if (e.key == "ArrowDown") {
        if (music.volume < 0.1) {
            console.log("already zero volume: ", music.volume);
            return;
        }
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

var musicbar = document.getElementById("musicbar");
var title = document.getElementById("playing-title");
toggle();

function toggle() {
    if (music.paused) {
        musicbar.classList.add("paused-bars");
        title.classList.remove("playing-text");
        title.classList.add("paused-text");
    } else {
        musicbar.classList.remove("paused-bars");
        title.classList.remove("paused-text");
        title.classList.add("playing-text");
    }
}


music.onplay = function () {
    title.setAttribute('song-name', "Playing: " + songname);
    toggle();
};
music.onpause = function () {
    title.setAttribute('paused-song-name', "Paused: " + songname);
    toggle();
};