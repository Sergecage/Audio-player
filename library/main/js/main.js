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
const arrowButtons = document.querySelectorAll(".arrow");
const firstCard = slider.querySelector(".image").offsetWidth;
const sliderElements = [...slider.children];

let isDragging = false, startX, startScrollLeft,timeoutId;
//number of cards per display
let imagePerView = Math.round(slider.offsetWidth / firstCard);
//infinite scrolling
sliderElements.slice(-imagePerView).reverse().forEach(image => {
    slider.insertAdjacentHTML("afterbegin", image.outerHTML);
});

sliderElements.slice(0,imagePerView).forEach(image => {
    slider.insertAdjacentHTML("beforeend", image.outerHTML);
});

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

const autoPlay = () => {
    if (window.innerWidth < 800) return;
    timeoutId = setTimeout(() => slider.scrollLeft += firstCard, 2500);
}
autoPlay();

const infiniteScroll = () => {
    if(slider.scrollLeft === 0) {
        slider.classList.add("no_transition");
        slider.scrollLeft = slider.scrollWidth - ( 2* slider.offsetWidth);
        slider.classList.remove("no_transition");
    } else if(slider.scrollLeft === slider.scrollWidth - slider.offsetWidth){
        slider.classList.add("no_transition");
        slider.scrollLeft = slider.offsetWidth;
        slider.classList.remove("no_transition");
    }

    clearTimeout(timeoutId);
    if(!slider.matches(":hover")) autoPlay()
}

slider.addEventListener('mousedown', dragStart);
slider.addEventListener('mousemove', dragging);
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