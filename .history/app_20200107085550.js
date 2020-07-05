const sections = document.querySelectorAll('section');
const bubble = document.querySelector('bubble');
const gradients = [
    "linear-gradient(to right top, #093637, #44A08D)",
    "linear-gradient(to right top, #6f0000, #200122)",
    "linear-gradient(to right top, #191654, #43C6AC)"
];


const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if (entry.isIntersecting) {
            bubble.style.css.setProperty("left", `${directions.left}px`);
            bubble.style.css.setProperty("top", `${directions.top}px`);
            bubble.style.css.setProperty("width", `${directions.width}px`);
            bubble.style.css.setProperty("height", `${directions.height}px`);
            bubble.style.css.background = gradients[gradientIndex];
        };
        // console.log(className);
        // console.log(entry);
    });
}

sections.forEach(section => {
    observer.observe(section);
});