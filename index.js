const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const quoteEl = document.getElementById("quote");

const quotes = [
    "Time flies when you're having fun!",
    "Why did the clock go to school? To get a little face time!",
    "Tick-tock, time for a snack break!",
    "You’re right on time for greatness!",
    "Don't watch the clock; do what it does. Keep moving!",
    "Time is an illusion—unless you're late!",
];
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if (h >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    
    // h = h % 12 || 12;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;

    let bgImage = '';
    if (h >= 6 && h < 12) {
        bgImage = 'url("mon.jpg")';
    } else if (h >= 12 && h < 18) {
        bgImage = 'url("after.avif")';
    } else {
        bgImage = 'url("night.avif")';
    }


    document.body.style.backgroundImage = bgImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    if (s === "00") {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteEl.innerText = randomQuote;
    }

    document.querySelector(".clock").style.animation = "float 3s infinite";


    setTimeout(updateClock, 1000);
}

updateClock();