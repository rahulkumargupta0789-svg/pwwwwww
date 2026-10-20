function showCourses(){
    document.getElementById("heroMessage").innerText = "scroll down to see our courses";
}

function courseInfo(courseName) {
    const message = document.getElementById("courseMessage");

    if (message) {
        message.innerText =
            "You selected " + courseName +
            ". Keep learning and improving your skills!";
    }
}
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("formMessage");

        message.innerText =
            "Thank you, " + name +
            "! Your demo message has been recorded.";

        form.reset();
    });
}

const menuButton = document.getElementById("menuBtn");
const links = document.querySelector(".nav-links");

if (menuButton && links) {
    menuButton.addEventListener("click", function () {
        const isOpen = links.style.display === "flex";

        links.style.display = isOpen ? "none" : "flex";
        links.style.flexDirection = "column";
    });
}

const quoteButton = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quoteText");

if (quoteButton && quoteText) {
    const quotes = [
        "Every expert was once a beginner!",
        "Small steps lead to big achievements!",
        "Keep practising. Keep improving!",
        "Your future is created by what you learn today!"
    ];

    quoteButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.innerText = quotes[randomIndex];
    });
}

let seconds =0;
let timerInterval = null;

function updateTimer() {
    seconds++;

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    document.getElementById("timer").textContent=
        String(hours).padStart(2,"0") + ":" +
        String(minutes).padStart(2,"0") + ":" +
        String(secs).padStart(2,"0");
}

document.getElementById("startTimer").addEventListener("click", function () {
    if (timerInterval == null){
        timerInterval = setInterval(updateTimer,1000);
    }
});

document.getElementById("pauseTimer").addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;
});
document.getElementById("resetTimer").addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds =0;
    document.getElementById("timer").textContent ="00:00:00";
});
