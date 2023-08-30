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
menuLog.addEventListener('mouseout', () => {
    menuLog.style.display = 'none'
});

//carousel event
/*const buttons = menuLog.querySelector("[carousel-button]");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselOffset === "next" ? 1 : -1;
    });
})*/

const circleButton = document.querySelector("about-slider");
circleButton.addEventListener("click", () => {
    circleButton.classList.add("active");
});