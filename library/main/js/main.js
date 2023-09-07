const navigation = document.querySelector(".nav");
const navbarList = document.querySelector("ul");
document.addEventListener('click', () => {
    navigation.classList.toggle('nav--active');
});

const iconLog = document.querySelector(".icon-log");
const menuLog = document.querySelector(".dropMenu");
iconLog.addEventListener('mouseover', () => {
    menuLog.style.display = 'block'
});
navigation.addEventListener('mouseout', () => {
    menuLog.style.display = 'none'
});

//carousel event
/*const buttons = menuLog.querySelector("[carousel-button]");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselOffset === "next" ? 1 : -1;
    });
})*/

const slider = document.querySelector(".about-container");
const arrowButtons = document.querySelectorAll(".arrow");
const firstCard = slider.querySelector(".image").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        slider.scrollLeft += btn.id == "left" ? -firstCard : firstCard; 
    })
});

const dragStart = (e) =>{
    isDragging = true;
    startX = e.pageX;
    startScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    slider.scrollLeft = startScrollLeft -(e.pageX - startX); // update scroll position
}

const dragStop = (e) => {
    isDragging = false;
}

slider.addEventListener('mousedown', dragStart);
slider.addEventListener('mousemove', dragging);
slider.addEventListener('mouseup', dragStop);

const circleButton = document.querySelector(".about-slider");
circleButton.addEventListener("click", () => {
    circleButton.classList.add("active");
});