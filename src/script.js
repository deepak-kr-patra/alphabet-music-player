const path = require('path-browserify');

let music = document.getElementById("audio");
let musicPrevious;
let songname;

const run = (e) => {
    console.log(e);
    musicPrevious = music;
    if (e.key == "a" || e.key == "A") {
        music.src = "https://audio.jukehost.co.uk/pWY9IYspaTneoePu9kZLJc0YXkmRmC2K";
        songname = "Aa Toh Sahi";
    }
    else if (e.key == "b" || e.key == "B") {
        music.src = "https://audio.jukehost.co.uk/2o1hosORbUyiGr6rLXuQYHcSj7TtsarV";
        songname = "Brown Rang";
    }
    else if (e.key == "c" || e.key == "C") {
        music.src = "https://audio.jukehost.co.uk/6o53suYxfflRSTvzAXFQUhml0O24fmrU";
        songname = "Chudi Jo Khanke";
    }
    else if (e.key == "d" || e.key == "D") {
        music.src = "https://audio.jukehost.co.uk/X8Tr4QAyCh29NLnwty3ZMy7Q0rgFzjCs";
        songname = "Dekha Ek Khwab";
    }
    else if (e.key == "e" || e.key == "E") {
        music.src = "https://audio.jukehost.co.uk/wDmWi642xyi6EOjRUTU31f95NoI84V3U";
        songname = "Ek Mulaqat";
    }
    else if (e.key == "f" || e.key == "F") {
        music.src = "https://audio.jukehost.co.uk/0wr8rJKyGNsgIno4v2CCm1LXEqzILqm4";
        songname = "Filhall";
    }
    else if (e.key == "g" || e.key == "G") {
        music.src = "https://audio.jukehost.co.uk/VD1Zf3xvWCurbDueKrpnecy0qp8k33gk";
        songname = "Ghungroo";
    }
    else if (e.key == "h" || e.key == "H") {
        music.src = "https://audio.jukehost.co.uk/4KFENOcgPbTCxZ4ETwlGq2BkzxPQucNy";
        songname = "Hawayein";
    }
    else if (e.key == "i" || e.key == "I") {
        music.src = "https://audio.jukehost.co.uk/r8Ezopd56Hh2bqTr0Pgasjiq2LETWy34";
        songname = "Ik Vaari Aa";
    }
    else if (e.key == "j" || e.key == "J") {
        music.src = "https://audio.jukehost.co.uk/qTSv2ooUmtrOlrDUrzh4KqlqR9FFa4aN";
        songname = "Jab Tak";
    }
    else if (e.key == "k" || e.key == "K") {
        music.src = "https://audio.jukehost.co.uk/0s9nYvJ2ubSNaAZLxTOXSgpKdFmkXN9x";
        songname = "Khairiyat";
    }
    else if (e.key == "l" || e.key == "L") {
        music.src = "https://audio.jukehost.co.uk/GSl61BbJMQdjLOSOVVRMD4stVS6BzAHH";
        songname = "Let Me Love You";
    }
    else if (e.key == "m" || e.key == "M") {
        music.src = "https://audio.jukehost.co.uk/5t1rQcGnBUnEzwt9a7Upf6I6eoRSu5lS";
        songname = "Mere Samne Wali Khidki";
    }
    else if (e.key == "n" || e.key == "N") {
        music.src = "https://audio.jukehost.co.uk/z1aCt736FuiovqGIlWxCPbLQGn7aTBFT";
        songname = "Na Na Na Na";
    }
    else if (e.key == "o" || e.key == "O") {
        music.src = "https://audio.jukehost.co.uk/tFKGpoVqU2kH7PLUvcb3QSKk3l5rdWMW";
        songname = "O Saathi";
    }
    else if (e.key == "p" || e.key == "P") {
        music.src = "https://audio.jukehost.co.uk/PqiGnmpciGheT4bouGACgW1DkC4GXhdV";
        songname = "Pani Da Rang";
    }
    else if (e.key == "q" || e.key == "Q") {
        music.src = "https://audio.jukehost.co.uk/oU62BFQ18genGP5iQeQkQTluOUQMTJ6Z";
        songname = "Quarter Past Midnight";
    }
    else if (e.key == "r" || e.key == "R") {
        music.src = "https://audio.jukehost.co.uk/IUD463eJND9dhpT96XScyIQnH89UkzuN";
        songname = "Raaz Aankhein Teri";
    }
    else if (e.key == "s" || e.key == "S") {
        music.src = "https://audio.jukehost.co.uk/F9nDasMjQ29DUkQoGBDFMRyPRDFIFsAv";
        songname = "Sanu Ek Pal Chain";
    }
    else if (e.key == "t" || e.key == "T") {
        music.src = "https://audio.jukehost.co.uk/7eNO5tIwWB5VS7UvQDkRR50qdhFzwbJm";
        songname = "Tera Hone Laga Hoon";
    }
    else if (e.key == "u" || e.key == "U") {
        music.src = "https://audio.jukehost.co.uk/E1jPTV93d25yX7DgenkHObi1UYcqftmB";
        songname = "Udi Udi Jaye";
    }
    else if (e.key == "v" || e.key == "V") {
        music.src = "https://audio.jukehost.co.uk/zZyBoLVsRroAuOwuHLlyK7JQrufHhfN0";
        songname = "Vacation";
    }
    else if (e.key == "w" || e.key == "W") {
        music.src = "https://audio.jukehost.co.uk/fEuObsOjzyxg7f9megCZpCD3Vp35PhIp";
        songname = "Wajah Tum Ho";
    }
    else if (e.key == "x" || e.key == "X") {
        music.src = "https://audio.jukehost.co.uk/eQoOuQaTISx0gBidCXgerlfOH3Q30wnW";
        songname = "XStatic";
    }
    else if (e.key == "y" || e.key == "Y") {
        music.src = "https://audio.jukehost.co.uk/DAuuMCk4MxJPTyzDpMxTT845ehpBWjv9";
        songname = "Yaar Ni Milya";
    }
    else if (e.key == "z" || e.key == "Z") {
        music.src = "https://audio.jukehost.co.uk/fDBx9h4ssM9S1rUXfnPqwCTbp58C4WQC";
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