// Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll("section, .portfolio-card, .course-card").forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});


// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter,20);
        }else{
            counter.innerText = target;
        }
    };

    updateCounter();
});


// Typing Effect
const text = "Master Programming Through Interactive Learning";
const typingTarget = document.querySelector(".typing");

if(typingTarget){
    let i = 0;

    function typeWriter(){
        if(i < text.length){
            typingTarget.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter,50);
        }
    }

    typeWriter();
}


// Mouse Move Cards
document.querySelectorAll(".portfolio-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width)-0.5)*20;
        const rotateX = ((y / rect.height)-0.5)*-20;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)`;
    });

    card.addEventListener("mouseleave",()=>{
        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });

});


// Parallax Hero
window.addEventListener("scroll",()=>{

    const hero = document.querySelector(".hero");

    if(hero){
        let offset = window.pageYOffset;
        hero.style.backgroundPositionY = offset * 0.5 + "px";
    }

});


// Scroll To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("scroll-top");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){
        topBtn.classList.add("active");
    }else{
        topBtn.classList.remove("active");
    }

});

topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});


// Floating Particles
const particlesContainer = document.createElement("div");
particlesContainer.classList.add("particles");

document.body.appendChild(particlesContainer);

for(let i=0;i<40;i++){

    const particle = document.createElement("span");

    particle.style.left = Math.random()*100 + "%";
    particle.style.animationDuration =
    (Math.random()*10+10)+"s";

    particle.style.animationDelay =
    Math.random()*5+"s";

    particlesContainer.appendChild(particle);
}