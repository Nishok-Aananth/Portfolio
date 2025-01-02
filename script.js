// Typing Effect using Typed.js
let typed = new Typed('.auto-type', {
    strings: ["VLSI Designer", "Digital Electronics Designer", "IoT Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});
// Smooth Scroll for Scroll Down Button
document.querySelector('.scroll-down a').addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
    });
});

// Smooth Fade-in on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('visible');
            }
        });
    });

    observer.observe(aboutSection);
});

document.addEventListener("DOMContentLoaded", () => {
    // Animate Technical Skills (Progress Bars)
    const bars = document.querySelectorAll(".skill-bar");
    bars.forEach((bar) => {
        const percent = bar.getAttribute("data-percent");
        const progress = bar.querySelector("span");

        // Animate bar width
        setTimeout(() => {
            progress.style.width = percent + "%";
        }, 200);

        // Display percentage as popup text
        progress.textContent = percent + "%";
        progress.style.position = "absolute";
        progress.style.left = "-40px"; // Adjust for RTL direction
        progress.style.color = "#fff";
    });

    // Animate Professional Skills (Circular Progress Bars)
    const circles = document.querySelectorAll(".circle-skill");
    circles.forEach((circleSkill) => {
        const circle = circleSkill.querySelector(".circle");
        const percent = parseInt(circleSkill.getAttribute("data-percent"));

        // Set final percent for animation
        circle.style.setProperty("--final-percent", percent);

        // Incrementally update the displayed percentage
        let currentPercent = 0;
        const interval = 2000 / percent; // Adjust duration based on percent

        const intervalId = setInterval(() => {
            currentPercent += 1;
            if (currentPercent > percent) {
                currentPercent = percent;
                clearInterval(intervalId);
            }
            circle.setAttribute("data-percent", currentPercent);
        }, interval);
    });
});

function goToGithub(url) {
    window.open(url, '_blank'); // Opens GitHub link in a new tab
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all required fields.");
    } else {
        alert("Your message has been submitted successfully!");
        this.reset(); // Clears the form
    }
});

  