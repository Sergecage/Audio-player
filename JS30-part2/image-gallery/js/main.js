const access = 'gywmdPVANAQaKeDs7tM6qklKbj_C4fejaU-YZvKv7Co';

const search = document.querySelector('#form');
const input = document.querySelector('#search');
const container = document.querySelector('.container');
const closeIcon = document.querySelector('.cross');

let receivedData = "";
let coverPage = 1; 

//Getting api response
const getData = async (receivedData) => {
    receivedData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${coverPage}&query=${receivedData}&client_id=${access}&orientation=portrait`;
    const res = await fetch(url);
    const data = await res.json();
    if ( coverPage  == 1) {
        container.innerHTML = "";
    } 
    const results = data.results;

    //add elemnts to html page
    results.map ((el) => {
        const card = document.createElement('div');
        card.classList.add('.card');
        container.append(card);
        const image = document.createElement('img');
        image.src = el.urls.small;
        image.classList.add('.card-image');
        image.alt = el.alt_description;
        card.append(image);
    });
    coverPage++;
};

getData('cat');

//posting api response
search.addEventListener('submit', (e) => {
    e.preventDefault();
    coverPage = 1;
    getData();
});
 const onloadPage = async (searchQuery) => {
    searchQuery = 'cat';
    const url = `https://api.unsplash.com/search/photos?page=${coverPage}&query=${searchQuery}&client_id=${access}&orientation=portrait`;
    const res = await fetch(url);
    const data = await res.json();
    const results = data.results;
    results.map ((el) => {
        const card = document.createElement('div');
        card.classList.add('.card');
        container.append(card);
        const image = document.createElement('img');
        image.src = el.urls.small;
        image.classList.add('.card-image');
        image.alt = el.alt_description;
        card.append(image);
    });
 };

document.addEventListener('DOMContenLoaded', onloadPage());

//add close while typing in input
input.addEventListener('keydown', () => {
    closeIcon.style.display ='block';
});

//clear search
closeIcon.addEventListener('click', (e) => {
    e.preventDefault();
    input.value ='';
    closeIcon.style.display = 'none';
});