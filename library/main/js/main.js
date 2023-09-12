const navigation = document.querySelector(".nav");
const navbarList = document.querySelector("ul");
document.addEventListener('click', () => {
    navigation.classList.toggle('nav--active');
});

const iconLog = document.querySelector(".icon-log");
const menuLog = document.querySelector(".dropMenu");
iconLog.addEventListener('click', () => {
    menuLog.style.display = 'block';
});
navigation.addEventListener('mouseout', () => {
    menuLog.style.display = 'none';
});

//Log In form
const logIn = document.querySelector(".logIn");
const logForm = document.querySelector(".popUpLog");
logIn.addEventListener('click', () => {
    logForm.style.display = "block";
});

const closeLogIn = document.querySelector(".close");
closeLogIn.addEventListener('click', () => {
    logForm.style.display = "none";
});

//Register form
const register = document.querySelector(".registerForm");
const registerForm =document.querySelector(".register")
register.addEventListener("click", () => {
    registerForm.style.display = "block";
});

const closeReg = document.querySelector(".closer");
closeReg.addEventListener('click', () => {
    registerForm.style.display = "none";
});

const slider = document.querySelector(".about-container");
const imageSlider = document.querySelector(".image-container")
const arrowButtons = document.querySelectorAll(".arrow");
const firstCard = slider.querySelector(".image").offsetWidth;
const sliderElements = [...slider.children];

let isDragging = false, startX, startScrollLeft,timeoutId;
//number of cards per display
let imagePerView = Math.round(imageSlider.offsetWidth / firstCard);
//infinite scrolling
sliderElements.slice(-imagePerView).reverse().forEach(image => {
    imageSlider.insertAdjacentHTML("afterbegin", image.outerHTML);
});

sliderElements.slice(0,imagePerView).forEach(image => {
    imageSlider.insertAdjacentHTML("beforeend", image.outerHTML);
});

arrowButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        imageSlider.scrollLeft += btn.id == "left" ? -firstCard : firstCard; 
    })
});

const dragStart = (e) =>{
    isDragging = true;
    startX = e.pageX;
    startScrollLeft = imageSlider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    imageSlider.scrollLeft = startScrollLeft -(e.pageX - startX); // update scroll position
}

const dragStop = (e) => {
    isDragging = false;
}

const autoPlay = () => {
    if (window.innerWidth < 800) return;
    timeoutId = setTimeout(() => imageSlider.scrollLeft += firstCard, 2500);
}
autoPlay();

const infiniteScroll = () => {
    if(imageSlider.scrollLeft === 0) {
        imageSlider.classList.add("no_transition");
        imageSlider.scrollLeft = imageSlider.scrollWidth - ( 2* imageSlider.offsetWidth);
        imageSlider.classList.remove("no_transition");
    } else if(imageSlider.scrollLeft === imageSlider.scrollWidth - imageSlider.offsetWidth){
        imageSlider.classList.add("no_transition");
        imageSlider.scrollLeft = imageSlider.offsetWidth;
        imageSlider.classList.remove("no_transition");
    }

    clearTimeout(timeoutId);
    if(!slider.matches(":hover")) autoPlay()
}

imageSlider.addEventListener('mousedown', dragStart);
imageSlider.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
slider.addEventListener('scroll', infiniteScroll);

const circleButton = document.querySelector(".about-slider");
circleButton.addEventListener("click", () => {
    circleButton.classList.add("active");
});

//pagination 
const sliderButton = document.querySelectorAll(".about-slider");

/*sliderButton.forEach( el => {
    el.classList.remove('active');
    el[id].classList.add('active');
})*/