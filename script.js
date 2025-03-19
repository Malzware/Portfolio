const cd = document.querySelector(".cd");

cd.addEventListener("mouseover", () => {
    cd.style.animationPlayState = "paused";
});

cd.addEventListener("mouseout", () => {
    cd.style.animationPlayState = "running";
});