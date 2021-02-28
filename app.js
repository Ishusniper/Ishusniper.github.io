window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY <= 0;
    header.classList.toggle('scrolling-inactive', windowPosition);
})
const sections = document.querySelectorAll('section');
const animatingbox = document.querySelector('.animatingbox');
const gradients = [
    "linear-gradient(to bottom, #5be0e5, #36D1DC)",
    "linear-gradient(to bottom, #E29587, #D66D75)",
    "linear-gradient(to bottom, #ff6a00, #ee0979)"
];

const options = {
    threshold: 0.5
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
    console.log(entry);
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute('data-index');
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
        height: coords.height,
        width: coords.width,
        top: coords.top,
        left: coords.left
    }
    if(entry.isIntersecting){
        animatingbox.style.setProperty("left", `${directions.left}px`)
        animatingbox.style.setProperty("top",  `${directions.top}px`)
        animatingbox.style.setProperty("width", `${directions.width}px`)
        animatingbox.style.setProperty("height",`${directions.height}px`)
        animatingbox.style.background = gradients[gradientIndex]
        animatingbox.style.setProperty("shape", `circle`)
    }
    });
}
sections.forEach(section=>{
    observer.observe(section);
});