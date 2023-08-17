const navigation = document.getElementsByClassName("nav");
const navbarList = document.querySelector("ul");
document.addEventListener('click', () => {
    navigation.classList.toggle('nav--active');
});