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