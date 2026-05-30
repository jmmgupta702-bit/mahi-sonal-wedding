/* =========================
   COUNTDOWN TIMER
========================= */

const weddingDate =
new Date("June 26, 2026 17:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance =
    weddingDate - now;

    const days =
    Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );

    document.getElementById("days").innerHTML =
    days;

    document.getElementById("hours").innerHTML =
    hours;

    document.getElementById("minutes").innerHTML =
    minutes;

    document.getElementById("seconds").innerHTML =
    seconds;

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById(
            "countdown"
        ).innerHTML =
        "<h2>🎉 The Wedding Day Has Arrived 🎉</h2>";

    }

}, 1000);


/* =========================
   SCROLL ANIMATION
========================= */

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

},

{
    threshold:0.15
}

);

document
.querySelectorAll(
"section"
)
.forEach((section)=>{

    section.classList.add("hidden");

    observer.observe(section);

});


/* =========================
   GOLD PARTICLES
========================= */

const particleContainer =
document.createElement("div");

particleContainer.id =
"particles";

document.body.appendChild(
particleContainer
);

for(let i=0;i<25;i++){

    const particle =
    document.createElement("span");

    particle.classList.add(
    "particle"
    );

    particle.style.left =
    Math.random()*100+"%";

    particle.style.animationDelay =
    Math.random()*10+"s";

    particle.style.animationDuration =
    8 + Math.random()*8 + "s";

    particleContainer.appendChild(
    particle
    );

}


/* =========================
   LOADER REMOVE
========================= */

window.addEventListener(
"load",
()=>{

    const loader =
    document.getElementById(
    "loader"
    );

    setTimeout(()=>{

        loader.style.display =
        "none";

    },2800);

});