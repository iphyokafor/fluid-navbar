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
        console.log(className);
        // console.log(entry);
    })
}

sections.forEach(section => {
    observer.observe(section);
});